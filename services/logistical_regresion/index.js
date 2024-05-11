import fs from 'fs';
import _ from 'lodash';

// Read data from JSON file
const jsonData = JSON.parse(fs.readFileSync('database.json'));

// Extract arrays from JSON data
const transactionsData = jsonData.transactions;
const companiesData = jsonData.companies;
const userData = jsonData.users;

// Perform merging
const mergedData = {
    mergedTransactions: _.merge(transactionsData, companiesData, { 'issuer': 'name' }),
    userData: userData
};

// Write merged data to a file
fs.writeFileSync('merged_data.json', JSON.stringify(mergedData));
