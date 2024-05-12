import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./components/home/home.js";
import "./App.css";
import UserTransaction from "./components/user_transaction/user_transaction.js";
import imagePath from "./image.png";

function App() {
  return (
    <Router>
      {" "}
      {/* Only one Router that wraps everything related to routing */}
      <div className="App">
        <div className="flex-button">
          <div className="header">
            <strong>Fraud detection</strong>
            <span className="material-symbols-outlined phishing-icon">
              phishing
            </span>
          </div>
          <div className="buttons">
            <RouteButtons />
          </div>
        </div>

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-transaction" element={<UserTransaction />} />
            <Route path="/image" element={<ImagePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function RouteButtons() {
  let navigate = useNavigate(); // This uses the navigate function from the router context provided by Router component above.

  return (
    <>
      <button className="default-button" onClick={() => navigate("/")}>
        Valid Transaction
      </button>
      <button
        className="default-button"
        onClick={() => navigate("/user-transaction")}
      >
        Fraud Transaction
      </button>
    </>
  );
}

function ImagePage() {
  return <img src={imagePath} alt="Description" />;
}

export default App;
