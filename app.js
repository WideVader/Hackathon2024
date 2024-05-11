import { addData, getData } from "./db/realTimeDatabase.js";

async function testFirebase() {
  const path = "test/data";
  const testData = { name: "Test User", age: 30, active: true };

  console.log("Adding data...");
  const key = await addData(path, testData);
  console.log(`Data added at key: ${key}`);
}

testFirebase().catch(console.error);
