//import check var from checks.js
const check = require('./checks.js');




function validateRequest() {
    
    executeChecks()
    
}


const executeChecks = () => {
    try {
        Obhect.keys(check).forEach((key) => {
            check[key]();
        });
    } catch (error) {
        console.log(error);
    }
}