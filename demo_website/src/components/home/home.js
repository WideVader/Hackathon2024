import React, { useState } from "react";
import "./home.css";
import { addData } from "../../db/realTimeDatabase";

function Home() {
  const [selectedFraudType, setSelectedFraudType] = useState(null);

  const fraudulentData = {
    user: {
      id: 3,
      name: "Alice Johnson",
      location: "Madrid, Spain",
      gender: "Female",
      age: 95,
      hobbies: ["Photography", "Cycling"],
      currency: "EUR",
      segment: "Senior",
    },
    transaction: {
      id: 3,
      location: "Paris, France",
      user_agent: "Mozilla/5.0",
      price: 1500,
      currency: "EUR",
      weather: "Sunny",
      category: "Apparel",
      issuer: "MasterCard",
      product: "Luxury goods",
      user_id: 3,
      time: "2024-05-10T16:45:00Z",
      fraud: null,
    },
  };

  const nonFraudulentData = {
    user: {
      id: 3,
      name: "Alice Johnson",
      location: "Madrid, Spain",
      gender: "Male",
      age: 20,
      hobbies: ["Photography", "Cycling"],
      currency: "EUR",
      segment: "Young Adult",
    },
    transaction: {
      id: 3,
      location: "Paris, France",
      user_agent: "Mozilla/5.0",
      price: 100,
      currency: "USD",
      weather: "Sunny",
      category: "Electronics",
      issuer: "MasterCard",
      product: "Phone",
      user_id: 3,
      time: "2024-05-10T16:45:00Z",
      fraud: null,
    },
  };

  const handleSelectCard = (isFraud) => {
    setSelectedFraudType(isFraud);
    console.log(`Transaction is ${isFraud ? "fraudulent" : "not fraudulent"}`);
  };

  const handleSubmit = () => {
    const data = selectedFraudType ? fraudulentData : nonFraudulentData;
    addData("users", data.user);
    addData("transactions", data.transaction);
    console.log(
      `Submitted as ${selectedFraudType ? "fraudulent" : "not fraudulent"}`
    );
    alert(
      `Submitted as ${selectedFraudType ? "fraudulent" : "not fraudulent"}`
    );
  };

  return (
    <div>
      <h1>Select a Transaction Type</h1>
      <div className="cards">
        <div
          className={`safe card ${
            selectedFraudType === false ? "selected" : ""
          }`}
          onClick={() => handleSelectCard(false)}
        >
          <h2>Non-Fraudulent Transaction</h2>
          <hr></hr>
          <p>Product: Phone</p>
          <p>User age: 20</p>
          <p>Price: 100</p>
          <p>Currency: USD</p>
          <p>Issuer: MasterCard</p>
          <p>Gender: male</p>
          <p>Category: Electronics</p>
          <p>Segment: Young Adult</p>
        </div>
        <div
          className={`fraudulent card ${
            selectedFraudType === true ? "selected" : ""
          }`}
          onClick={() => handleSelectCard(true)}
        >
          <h2>Fraudulent Transaction</h2>
          <hr></hr>
          <p>Product: Luxury goods</p>
          <p>User age: 95</p>
          <p>Price: 1500</p>
          <p>Currency: EUR</p>
          <p>Issuer: MasterCard</p>
          <p>Gender: male</p>
          <p>Category: Luxury Goods</p>
          <p>Segment: Senior</p>
        </div>
      </div>
      <div className="submit-button">
        <button
          className="default-button"
          onClick={handleSubmit}
          disabled={selectedFraudType === null}
        >
          Submit Transaction
        </button>
      </div>
    </div>
  );
}

export default Home;
