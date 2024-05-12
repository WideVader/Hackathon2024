
import checks  from './checks.js'
//import predict
import { predict } from '../logistical_regresion/index.js'
import { getData } from '../../db/realTimeDatabase.js'

const getUserFromTransaction = async (transaction) => {
    const userData = await getData("/users");
    const user = userData[transaction.user_id]
    return user
}


export async function validateRequest(transaction) {
    let company = {}
    let user = await getUserFromTransaction(transaction)

    try {
        if(transactionRateLimiter(company, transaction, user)){
            return false
        }
        if(executeChecks(company, transaction, user) > 0.6){
            return new Error('fraud')
        }
        //TODO: Implement a logic for stages of blocking a transaction
        if (executeChecks(company, transaction, user) > 0.35) {
            return predict(transaction)
        }

        return 'not fraud'
    } catch (error) {
        return new Error('fraud')
    }
}

const transactionRateLimiter = (company, transaction, user) => {
    //TODO: implement rate limiter for transactions
    if (company.transactionRateLimit > 10) {
        throw new Error('Transaction rate limit exceeded');
    }

}



const executeChecks = (company, transaction, user) => {
    // console.log({company, transaction, user});
    try {
        let totalWeight = 0
        let checkWeights = []
        Object.keys(checks).forEach((key) => {
            checkWeights.push(checks[key](company, transaction, user))
        });
        checkWeights.forEach(weight => totalWeight += weight)
        return totalWeight
    } catch (error) {
        console.log(error);
        return 1
    }
}