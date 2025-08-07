import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="beta-tag">
            <span className="beta-text">Get early access</span>
            <span className="web3-text">web3.0 beta</span>
          </div>

          <h1 className="hero-title">
            <span className="title-line">Meet! Recognito</span>
            <span className="title-line">
              Built{" "}
              for a secure Web3 future.
            </span>
          </h1>

          <p className="hero-description">
            Empowering blockchain networks with top-tier validation, RPC, and
            IBC relayers—built for decentralized scale.
          </p>

          <div className="hero-buttons">
            <button className="apply-beta-btn">Apply for Beta</button>
            <button className="learn-more-btn">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
