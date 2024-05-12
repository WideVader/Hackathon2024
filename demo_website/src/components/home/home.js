import React, { useState } from "react";
import "./home.css";

function Home() {
  // State to track the selected fraud type
  const [selectedFraudType, setSelectedFraudType] = useState(null);

  const handleSelectCard = (isFraud) => {
    setSelectedFraudType(isFraud);
    console.log(`Transaction is ${isFraud ? "fraudulent" : "not fraudulent"}`);
  };

  const handleSubmit = () => {
    // You could add logic to send this data to a server here
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
          <p>Location: New York, USA</p>
          <p>User age: 20</p>
          <p>Price: $100</p>
          <p>Currency: USD</p>
          <p>Category: Electronics</p>
          <p>Weather: Sunny</p>
        </div>
        <div
          className={`fradulant card ${
            selectedFraudType === true ? "selected" : ""
          }`}
          onClick={() => handleSelectCard(true)}
        >
          <h2>Fraudulent Transaction</h2>
          <p>Location: Paris, France</p>
          <p>User age: 95</p>
          <p>Price: $1500</p>
          <p>Currency: EUR</p>
          <p>Category: Luxury Goods</p>
          <p>Weather: Stormy</p>
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
