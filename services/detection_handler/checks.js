const MAX_PRICE_DEVIATION_PERCENTAGE = 0.2
const isBelowAverage = (all_data, new_value) => {
    let sum = 0;
    let count = 0;
    for (let key in all_data) {
        sum += all_data[key]
        count++
    }
    let average = sum / count
    return new_value < average

}


const locationChecker = (company, transaction, user) => {
    if (Math.abs(user.location_lang - location_lang) > 0.7 || Math.abs(user.location_lat - location_lat) > 0.7) {
        return 0.2;
    }
    return 0
}


const averagePriceCheck = (company, transaction, user) => {
    if (Math.abs(transaction.price - user.average_price) > (user.average_price * MAX_PRICE_DEVIATION_PERCENTAGE)) {
        return 0.1
    }
    return 0
}

const newIssuer = (company, transaction, user) => {
    if (!user.payment_issuers[transaction.issuer]) {
        return 0.1
    }

    let transactionPerIssuers = []
    Object.keys(user.payment_issuers).forEach(issuer => transactionPerIssuers.push(user.payment_issuers[issuer]))



    if (isBelowAverage(transactionPerIssuers, user.payment_issuers[transaction.issuer])) {
        return 0.1
    }
    return 0
}

const categoriesCheck = (company, transaction, user) => {
    if (!user.categories[transaction.category]) {
        return 0.1
    }

    let trancactionDistibutionPerCategory = []
    Object.keys(user.categories).forEach(category => trancactionDistibutionPerCategory.push(user.categories[category]))



    if (isBelowAverage(trancactionDistibutionPerCategory, user.categories[transaction.issuer])) {
        return 0.1
    }
    return 0
}

const timeSlotTransactionsCheck = (company, transaction, user) => {
    let time_slot = Math.floor(transaction.time / 1000 / 60 / 60 / 4)

    let trancactionDistibutionPerTimeSlot = []
    Object.keys(user.average_transaction_times).forEach(transaction_time => trancactionDistibutionPerTimeSlot.push(user.user_agents[transaction_time]))


    //improve how diviation is calculated
    if (isBelowAverage(trancactionDistibutionPerTimeSlot, user.user_agents[transaction.user_agent])) {
        return 0.1
    }
    return 0

}

const userAgentsCheck = (company, transaction, user) => {
    if (!user.user_agents[transaction.user_agent]) {
        return 0.1
    }

    let trancactionDistibutionPerUserAgent = []
    Object.keys(user.user_agents).forEach(user_agent => trancactionDistibutionPerUserAgent.push(user.user_agents[user_agent]))



    if (isBelowAverage(trancactionDistibutionPerUserAgent, user.user_agents[transaction.user_agent])) {
        return 0.1
    }
    return 0
}




const checks = {
    locationChecker,
    averagePriceCheck,
    newIssuer,
    categoriesCheck,
    timeSlotTransactionsCheck,
    userAgentsCheck
}

export default checks;