import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BackgroundEffects from "./components/BackgroundEffects";
import NetworkNodes from "./components/NetworkNodes";

function App() {
  return (
    <div className="App">
      <BackgroundEffects />
      <Header />
      <Hero />
      <NetworkNodes />
    </div>
  );
}

export default App; 