import React, { useState } from "react";
import "./home.css";

function Home() {
  const [transactionData, setTransactionData] = useState({
    id: "",
    location: "",
    user_agent: navigator.userAgent,
    price: "",
    currency: "",
    weather: "",
    category: "",
    issuer: "",
    product: "",
    user_id: "",
    time: new Date().toISOString(),
    fraud: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTransactionData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Transaction Data:", transactionData);
  };

  return (
    <>
      {" "}
      <h1>Make a purchase</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          value={transactionData.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="number"
          name="price"
          value={transactionData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="text"
          name="currency"
          value={transactionData.currency}
          onChange={handleChange}
          placeholder="Currency"
        />
        <input
          type="text"
          name="weather"
          value={transactionData.weather}
          onChange={handleChange}
          placeholder="Weather"
        />
        <input
          type="text"
          name="category"
          value={transactionData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="text"
          name="issuer"
          value={transactionData.issuer}
          onChange={handleChange}
          placeholder="Issuer"
        />
        <input
          type="text"
          name="product"
          value={transactionData.product}
          onChange={handleChange}
          placeholder="Product"
        />
        <input
          type="text"
          name="user_id"
          value={transactionData.user_id}
          onChange={handleChange}
          placeholder="User ID"
        />
        <button className="default-button" type="submit">
          Submit Transaction
        </button>
      </form>
    </>
  );
}

export default Home;
