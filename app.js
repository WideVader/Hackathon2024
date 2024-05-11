import { uploadAllFixtures } from "./db/fixtures.js";
import { getData } from "./db/realTimeDatabase.js";

const runUploadProcess = async () => {
  console.log("Starting to upload fixtures...");
  try {
    await uploadAllFixtures();
    console.log("Finished uploading all fixtures.");
  } catch (error) {
    console.error("Error occurred during fixtures upload:", error);
  }
};

async function logCompanyData() {
  const companyData = await getData("/companies");
  if (companyData) {
    console.log("Company Data:", Object.values(companyData));
  } else {
    console.log("No company data available.");
  }
}

async function logTransactionData() {
  const transactionData = await getData("/transactions");
  if (transactionData) {
    console.log("Transaction Data:", Object.values(transactionData));
  } else {
    console.log("No transaction data available.");
  }
}

async function logUserData() {
  const userData = await getData("/users");
  if (userData) {
    console.log("User Data:", Object.values(userData));
  } else {
    console.log("No user data available.");
  }
}

async function logOneTransactionData(id) {
  const transaction = await getData(`/transactions/${id}`);
  if (transaction) {
    console.log("User Data:", Object.values(transaction));
  } else {
    console.log("No user data available.");
  }
}

logOneTransactionData(1).catch(console.error);
