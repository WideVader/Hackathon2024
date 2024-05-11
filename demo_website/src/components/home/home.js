import React, { useState } from "react";
import "./home.css";

function Home() {
  const [transactionData, setTransactionData] = useState({
    id: "",
    location: "",
    user_agent: navigator.userAgent,
    price: "",
    currency: "",
    weather: "Sunny", // Default weather option
    category: "Electronics", // Default category option
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
      <form onSubmit={handleSubmit}>
        <h1>Make a purchase</h1>
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
        <div className="radio-buttons">
          <label className="tooltip">
            <input
              type="radio"
              name="weather"
              value="Sunny"
              checked={transactionData.weather === "Sunny"}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined icon">sunny</span>
            <span className="tooltiptext">Sunny</span>
          </label>
          <label className="tooltip">
            <input
              type="radio"
              name="weather"
              value="Storm"
              checked={transactionData.weather === "Storm"}
              onChange={handleChange}
            />
            <span class="material-symbols-outlined icon">thunderstorm</span>
            <span className="tooltiptext">Storm</span>
          </label>
          <label className="tooltip">
            <input
              type="radio"
              name="weather"
              value="Rainy"
              checked={transactionData.weather === "Rainy"}
              onChange={handleChange}
            />
            <span className="material-symbols-outlined icon">rainy</span>
            <span className="tooltiptext">Rainy</span>
          </label>
        </div>

        <div className="radio-buttons">
          <label className="tooltip">
            <input
              type="radio"
              name="category"
              value="Electronics"
              checked={transactionData.category === "Electronics"}
              onChange={handleChange}
            />
            <span class="material-symbols-outlined icon">electric_bolt</span>
            <span className="tooltiptext">Electronics</span>
          </label>
          <label className="tooltip">
            <input
              type="radio"
              name="category"
              value="Books"
              checked={transactionData.category === "Books"}
              onChange={handleChange}
            />{" "}
            <span class="material-symbols-outlined icon">menu_book</span>
            <span className="tooltiptext">Books</span>
          </label>
          <label className="tooltip">
            <input
              type="radio"
              name="category"
              value="Apparel"
              checked={transactionData.category === "Apparel"}
              onChange={handleChange}
            />
            <span class="material-symbols-outlined icon">apparel</span>
            <span className="tooltiptext">Clothing</span>
          </label>
        </div>

        <button className="default-button" type="submit">
          Submit Transaction
        </button>
      </form>
    </>
  );
}

export default Home;
