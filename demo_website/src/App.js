import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.js";
import "./App.css";

const About = () => <h2>About Page</h2>;

function App() {
  return (
    <div className="App">
      <div className="header">
        <strong>Fraud detection</strong>
        <span class="material-symbols-outlined phishing-icon">phishing</span>
      </div>
      <div className="app-content">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
