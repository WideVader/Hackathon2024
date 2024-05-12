//branko here you can write cronnjob code

const { initializeApp } = require("firebase-admin");
const functions = require('firebase-functions');
const { getData } = require("../../db/realTimeDatabase");
const { train } = require('../logistical_regresion/index.js')

// Initialize Firebase Admin SDK
const firebaseAdminApp = initializeApp();
const db = firebaseAdminApp.firestore(); // Get a Firestore instance
const USER_PROFILE_UPDATER_INTERVAL = 1000 * 60 * 10; // 10 minutes
const TRAIN_MODEL_INTERAVL = 1000 * 60 * 60; //1h

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



const handleUserAgents = (unanalized_transactions, user) => {
    unanalized_transactions.forEach(transaction => {
        user.user_agents[transaction.user_agent] ? user.user_agents[transaction.user_agent] = { number_of_transactions: 1 } : user.user_agents[transaction.user_agent].number_of_transactions++
    })
}

const timeSlotTransactions = (unanalized_transactions, user) => {
    unanalized_transactions.forEach(transaction => {
        let time_slot = Math.floor(transaction.time / 1000 / 60 / 60 / 4)
        user.average_transaction_times[time_slot]++
    })
}

const handleCategories = (unanalized_transactions, user) => {
    unanalized_transactions.forEach(transaction => {
        user.categories[transaction.category] ? user.categories[transaction.category] = { number_of_transactions: 1 } : user.categories[transaction.category].number_of_transactions++
    })
}

const handleNewIssuer = (unanalized_transactions, user) => {
    unanalized_transactions.forEach(transaction => {
        user.payment_issuers[transaction.issuer] ? user.payment_issuers[transaction.issuer] = { number_of_transactions: 1 } : user.payment_issuers[transaction.issuer].number_of_transactions++
    })
}

const handleAveragePrice = (unanalized_transactions, user) => {
    let last_ten_sum_price = unanalized_transactions.reduce((acc, transaction) => acc + transaction.price, 0)
    user.average_price = (user.average_price + last_ten_sum_price) / (unanalized_transactions.length + 1)
}

const handleNewLocations = (unanalized_transactions, user) => {
    // TODO: Implement location updater
}


// Cloud Function triggered on database changes
const CronJobBaseHandler = async () => {
    sleep(USER_PROFILE_UPDATER_INTERVAL)
    try {
        const transactions = await db.collection('transactions').get();
        transactions.sort((a, b) => a.time - b.time)

        const users = await db.collection('users').get();


        users.forEach(user => {
            if (!usersChanges[user.id]) {
                usersChanges[user.id] = {}
            }
            let all_user_transactions = transactions.filter(transaction => transaction.user_id === user.id)
            let unanalized_transactions = all_user_transactions.filter(transaction => !transaction.analized)
            handleNewLocations(unanalized_transactions, user)
            handleAveragePrice(unanalized_transactions, user)
            handleNewIssuer(unanalized_transactions, user)
            handleCategories(unanalized_transactions, user)
            timeSlotTransactions(unanalized_transactions, user)
            handleUserAgents(unanalized_transactions, user)
        })
        return null;
    } catch (error) {
        console.error('Error updating medians:', error);
        return null;
    }
}

const TrainModel = async () => {
    sleep(TRAIN_MODEL_INTERAVL)
    const transactions = await db.collection('transactions').get();
    const users = await db.collection('users').get();
    const companies = await db.collection('companies').get();

    const dump = {
        companies: [...companies],
        transactions: [...transactions],
        users: [...users]
    }

    const jsonData = JSON.stringify(dump, null, 4);

    fs.writeFileSync('../logistical_regresion/database.json', jsonData);
    train()
}



CronJobBaseHandler()
TrainModel()

/*
TODO OPTIONAL: add dmp integration
1. from phone we get id on ios (IDFA)/on andoid (IMEI), we already have phone id in user record
2. load dmp data into user profile
3. use dmp data on prediction model and initial detection logic
*/