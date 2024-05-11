import {exec} from 'child_process'

export default function predict(Obj) {
    // Convert Obj to a JSON string
    const jsonData = JSON.stringify(Obj);

    // Execute the Python script
    exec(`python predict.py '${jsonData}'`, (error, stdout, stderr) => {
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

    // Execute the Python script
    exec(`python trainModel.py`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error}`);
            return;
        }
        // Process the result from the Python script
        console.log('Output from Python script:');
        console.log(stdout);
    });
};