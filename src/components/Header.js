import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/favicon.svg" alt="BMA Logo" className="logo-icon" />
          <span className="logo-text">BMA.</span>
        </div>

        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#hr" className="nav-link">
            HR
          </a>
          <a href="#leads" className="nav-link">
            Leads
          </a>
          <a href="#tasks" className="nav-link">
            Tasks
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <button className="join-beta-btn">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
