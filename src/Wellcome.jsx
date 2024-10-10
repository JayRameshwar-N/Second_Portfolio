import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Custom CSS file for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome !!</h1>
      <Link to="/resume">
        <button type="button" className="btn btn-primary btn-sm custom-button">
          Resume
        </button>
      </Link>
      <Link to="/portfolio">
        <button type="button" className="btn btn-secondary btn-sm custom-button">
          Portfolio
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
