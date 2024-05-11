const checks = require('./checks.js').default;


export function validateRequest(company, transaction, user) {
    try {
        transactionRateLimiter(company, transaction, user)
        executeChecks(company, transaction, user)
        return true
    } catch (error) {
        return false
    }
}

const transactionRateLimiter = (company, transaction, user) => {
    if (company.transactionRateLimit > 10) {
        throw new Error('Transaction rate limit exceeded');
    }

}



const executeChecks = (company, transaction, user) => {
    try {
        Object.keys(checks).forEach((key) => {
            checks[key](company, transaction, user);
        });
    } catch (error) {
        console.log(error);
    }
}