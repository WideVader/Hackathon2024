const locationCheck = (company, transaction, user) => {
    if (Math.abs(company.location - transaction.location) > 10) {
        throw new Error('Location mismatch');
    }
}

const userProfileCheck = (company, transaction, user) => {
    if (company.userProfile !== transaction.userProfile) {
        throw new Error('User profile mismatch');
    }
}



const deviceCheck = (company, transaction, user) => {
    if (!user.devices.contains(transaction.device)) {
        throw new Error('Device mismatch');
    }
}



const checks = {
    locationCheck,
    userProfileCheck,
    deviceCheck,
    ageCheck
}

export default checks;