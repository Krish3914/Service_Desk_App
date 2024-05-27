// components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import CSS for styling

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Welcome to Service Desk Application</h1>
        <p>Your one-stop solution for managing tickets and requests.</p>
        <div className="action-buttons">
          <Link to="/login" className="btn">
            Login
          </Link>
          <Link to="/register" className="btn">
            Register
          </Link>
        </div>
        <div className="raise-ticket">
          <Link to="/login" className="raise-ticket-btn">
            Raise a Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
