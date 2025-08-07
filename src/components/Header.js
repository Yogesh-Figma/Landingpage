import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/favicon.svg" alt="Recognito Logo" className="logo-icon" />
          <span className="logo-text">Recognito.</span>
        </div>

        <nav className="nav">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#private-key" className="nav-link">
            Private Key
          </a>
          <a href="#product" className="nav-link">
            Product
          </a>
          <a href="#solution" className="nav-link">
            Solution
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="#community" className="nav-link">
            Community
          </a>
        </nav>

        <button className="join-beta-btn">Join Beta</button>
      </div>
    </header>
  );
};

export default Header;
