import React from "react";

const PieApp = () => {
  const pies = [
    { id: "peach", value: "peach 🍑" },
    { id: "cherry", value: "cherry 🍒" },
    { id: "blueberry", value: "blueberry 🫐" },
    { id: "mango", value: "mango 🥭" },
  ];

  return (
    <div>
      <h1>Behold a list of delicious pie flavours:</h1>

      <ul>
        {pies.map((pie) => (
          <li key={pie.id}>
            <span>{pie.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PieApp;
