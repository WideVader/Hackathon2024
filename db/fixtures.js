import { addData } from "./realTimeDatabase.js";
import { Company } from "../interfaces/company.js";
import { Transaction } from "../interfaces/transaction.js";
import { User } from "../interfaces/user.js";

const companyFixtures = [
  new Company({
    id: "1",
    name: "Visa",
    location: "New York, USA",
    currency: "USD",
    category: "Financial Services",
  }),
  new Company({
    id: "2",
    name: "MasterCard",
    location: "San Francisco, USA",
    currency: "USD",
    category: "Financial Services",
  }),
  new Company({
    id: "3",
    name: "Amex",
    location: "London, UK",
    currency: "GBP",
    category: "Financial Services",
  }),
];

const transactionFixtures = [
  new Transaction({
    id: "1",
    location: "London, UK",
    user_agent: "Mozilla/5.0",
    price: 100,
    currency: "GBP",
    weather: "Rainy",
    category: "Electronics",
    issuer: "Visa",
    product: "Laptop",
    user_id: "1",
    time: "2024-05-10T14:30:00Z",
    fraud: true,
  }),
  new Transaction({
    id: "2",
    location: "Berlin, Germany",
    user_agent: "Mozilla/5.0",
    price: 45,
    currency: "EUR",
    weather: "Cloudy",
    category: "Books",
    issuer: "MasterCard",
    product: "E-book reader",
    user_id: "2",
    time: "2024-05-10T15:00:00Z",
    fraud: false,
  }),
  new Transaction({
    id: "3",
    location: "Paris, France",
    user_agent: "Mozilla/5.0",
    price: 250,
    currency: "EUR",
    weather: "Sunny",
    category: "Apparel",
    issuer: "Amex",
    product: "Designer Jeans",
    user_id: "3",
    time: "2024-05-10T16:45:00Z",
    fraud: false,
  }),
];

const userFixtures = [
  new User({
    id: "1",
    name: "John Doe",
    location: "Berlin, Germany",
    gender: "Male",
    age: 28,
    hobbies: ["Reading", "Hiking"],
    currency: "EUR",
    segment: "Adult",
  }),
  new User({
    id: "2",
    name: "Jane Smith",
    location: "Paris, France",
    gender: "Female",
    age: 34,
    hobbies: ["Cooking", "Traveling"],
    currency: "EUR",
    segment: "Adult",
  }),
  new User({
    id: "3",
    name: "Alice Johnson",
    location: "Madrid, Spain",
    gender: "Female",
    age: 24,
    hobbies: ["Photography", "Cycling"],
    currency: "EUR",
    segment: "Young Adult",
  }),
];

export const uploadAllFixtures = async () => {
  await Promise.all([
    ...companyFixtures.map((data) => addData("companies", data)),
    ...transactionFixtures.map((data) => addData("transactions", data)),
    ...userFixtures.map((data) => addData("users", data)),
  ])
    .then(() => console.log("All fixtures uploaded successfully."))
    .catch((error) => console.error("Error uploading fixtures:", error));
};
