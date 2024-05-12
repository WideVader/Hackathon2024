import {exec} from 'child_process'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export function predict(Obj) {
    // Convert Obj to a JSON string
    const jsonData = JSON.stringify(Obj);
    const pythonScriptPath = join(currentDir, 'predict.py');
    // Execute the Python script
    exec(`python ${pythonScriptPath} '${jsonData}'`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return;
        }
        // Process the result from the Python script
        console.log('Output from Python script:');
        console.log(stdout);
    });
};


export function train() {
    const pythonScriptPath = join(currentDir, 'trainModel.py');
    // Execute the Python script
    exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return;
        }
        // Process the result from the Python script
        console.log('Output from Python script:');
        console.log(stdout);
    });
};

train()


// predict([{
//     "age": 20,
//     "price": 100,
//     "t_currency": "USD",
//     "issuer": "MasterCard",
//     "product": "Phone",
//     "gender": "male",
//     "currency": "USD",
//     "segment": "Young Adult",
// }]);
// predict([{
//     "age": 95,
//     "price": 1500,
//     "t_currency": "EUR",
//     "issuer": "MasterCard",
//     "product": "Luxury goods",
//     "gender": "male",
//     "currency": "EUR",
//     "segment": "Senior",
// }]);