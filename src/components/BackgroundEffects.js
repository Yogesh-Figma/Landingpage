import React, { useEffect, useRef, useState } from "react";
import "./BackgroundEffects.css";

const BackgroundEffects = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="background-effects">
      {/* Animated wave layer */}
      <div className="wave-layer"></div>

      {/* Subtle orange accent lines */}
      <div className="accent-line accent-line-1"></div>
      <div className="accent-line accent-line-2"></div>
      <div className="accent-line accent-line-3"></div>

      {/* Minimal ambient particles */}
      <div className="ambient-particle"></div>
      <div className="ambient-particle"></div>
      <div className="ambient-particle"></div>
      <div className="ambient-particle"></div>

      {/* Subtle network glow - reduced */}
      <div className="cta-bottom-container">
        <button className="cta-bottom-btn">Contact Us</button>
      </div>

      {/* Cursor-following subtle overlay */}
      <div
        ref={overlayRef}
        className="cursor-gradient-overlay"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 30%, transparent 60%)`,
        }}
      ></div>
    </div>
  );
};

export default BackgroundEffects;
