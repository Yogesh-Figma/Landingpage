import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="beta-tag">
            <span className="beta-text">Get early access</span>
            <span className="web3-text">BMA App</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">BMA</span>
            <span className="title-line">Empower your team. Streamline your workflow.</span>
          </h1>

          <p className="hero-description">
            BMA streamlines HR, lead management, and task tracking.<br />
            Boost productivity. Simplify your day.
          </p>

          <div className="hero-buttons">
            <button className="apply-beta-btn">Request a Demo</button>
            <button className="learn-more-btn">See How It Works</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
