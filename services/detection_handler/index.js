
import checks  from './checks.js'
//import predict
import { predict } from '../logistical_regresion/index.js'



export function validateRequest(company, transaction, user) {
    try {
        if(transactionRateLimiter(company, transaction, user)){
            return false
        }
        if (executeChecks(company, transaction, user) > 0.35) {
            return predict(transaction)
        }

        return true
    } catch (error) {
        return false
    }
}

const transactionRateLimiter = (company, transaction, user) => {
    //TODO: implement rate limiter for transactions
    if (company.transactionRateLimit > 10) {
        throw new Error('Transaction rate limit exceeded');
    }

}



const executeChecks = (company, transaction, user) => {
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