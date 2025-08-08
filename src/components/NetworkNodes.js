import React from "react";
import "./NetworkNodes.css";

const NetworkNodes = () => {
  return (
    <div className="network-nodes">
      {/* Network lines - dotted connections */}
      <svg
        className="network-lines"
        viewBox="0 0 1400 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6600" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ff6600" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff6600" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Dotted network connections */}
        <line
          x1="150"
          y1="650"
          x2="350"
          y2="550"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="350"
          y1="550"
          x2="500"
          y2="600"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="500"
          y1="600"
          x2="700"
          y2="480"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="700"
          y1="480"
          x2="900"
          y2="520"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="900"
          y1="520"
          x2="1100"
          y2="650"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="350"
          y1="550"
          x2="700"
          y2="480"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
        <line
          x1="500"
          y1="600"
          x2="900"
          y2="520"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeDasharray="4,6"
        />
      </svg>

      {/* Network nodes with exact positioning from design */}
      <div className="node secured" style={{ left: "12%", bottom: "8%" }}>
        <div className="node-dot"></div>
        <span className="node-label">HR Automation</span>
      </div>

      <div className="node encrypted" style={{ left: "40%", bottom: "32%" }}>
        <div className="node-dot"></div>
        <span className="node-label">Lead Management</span>
      </div>

      <div className="node light-speed" style={{ left: "35%", bottom: "15%" }}>
        <div className="node-dot"></div>
        <span className="node-label">Task Tracking</span>
      </div>

      <div className="node center-hub" style={{ left: "60%", bottom: "26%" }}>
        <div className="node-dot"></div>
        <span className="node-label">Productivity Hub</span>
      </div>

      <div className="node local-hub" style={{ left: "75%", bottom: "45%" }}>
        <div className="node-dot"></div>
        <span className="node-label">Workflow</span>
      </div>

      <div className="node system" style={{ left: "85%", bottom: "12%" }}>
        <div className="node-dot"></div>
        <span className="node-label">Efficiency</span>
      </div>

      {/* Floating geometric elements */}
      <div className="floating-element element-1"></div>
      <div className="floating-element element-2"></div>
      <div className="floating-element element-3"></div>
      <div className="floating-element element-4"></div>
      <div className="floating-element element-5"></div>
      <div className="floating-element element-6"></div>
    </div>
  );
};

export default NetworkNodes;
