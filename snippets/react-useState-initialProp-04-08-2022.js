import React from "react";

// If no initialState is passed as a prop, it defaults to false.
const Toggle = ({ initialState = false }) => {
  // Pass that initialState as an argument to the useState hook.
  const [on, setOn] = React.useState(initialState);

  const handleClick = () => {
    setOn(!on);
  };

  return <button onClick={handleClick}>{on ? "ON" : "OFF"}</button>;
};

const App = () => {
  // Pass the initialState prop to the Toggle component.
  return <Toggle initialState={true} />;
};

export default App;
