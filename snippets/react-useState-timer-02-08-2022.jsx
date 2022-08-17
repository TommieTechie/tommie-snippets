import React, { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const add = () => setSeconds(seconds + 1);

  return <button onClick={add}>{seconds}</button>;
};

const App = () => {
  return <Timer />;
};

export default App;
