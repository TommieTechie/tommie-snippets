import React from "react";
import "./planet-styles.css";

const mars = (
    <div 
      className="planet planet--mars" 
      style={{backgroundColor: "orange", borderRadius: "50%"}}              
    >
      Planet Mars
    </div>
  );
  
const earth = (
    <div 
      className="planet planet--earth" 
      style={{backgroundColor: "blue"}}
    >
      Planet Earth
    </div>
  );

function App() {
  return (
    <>
      {mars}
      {earth}
    </>
  )
}

export default App;