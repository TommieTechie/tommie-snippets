import React from "react";

const mars = (
  <div
    className="planet planet--mars"
    style={{ backgroundColor: "orange", borderRadius: "50%" }}
  >
    Planet Mars
  </div>
);

const earth = (
  <div className="planet planet--earth" style={{ backgroundColor: "blue" }}>
    Planet Earth
  </div>
);

const css = `
  .planet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
  }

  .planet--earth {
    width: 200px;
    height: 200px;
    color: white;
  }

  .planet--mars {
    width: 100px;
    height: 100px;
  }
`;

function App() {
  return (
    <>
      <style>{css}</style>
      {mars}
      {earth}
    </>
  );
}

export default App;
