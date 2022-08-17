import React from "react";
import "../css-planet-styles.css";

const Planet = ({ style, planet, className = "", children }) => {
  const planetClassName = planet ? `planet--${planet}` : "";

  return (
    <div
      className={`planet ${className} ${planetClassName}`}
      style={{ fontWeight: "bold", ...style }}
    >
      {children}
    </div>
  );
};

const SolarSystemApp = () => {
  return (
    <div>
      <Planet planet="mars" style={{ backgroundColor: "orange" }}>
        Mars
      </Planet>
      <Planet
        planet="earth"
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Earth
      </Planet>
      <Planet>Unknown</Planet>
    </div>
  );
};

export default SolarSystemApp;
