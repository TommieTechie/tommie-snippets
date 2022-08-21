import React, { useState, useEffect } from "react";

const TellAJoke = ({
  defaultJoke = "What did the big flower say to the littler flower? Hi, bud! 🌼",
}) => {
  const [joke, setJoke] = useState(
    () => localStorage.getItem("joke") ?? defaultJoke
  );

  useEffect(() => {
    localStorage.setItem("joke", joke);
  }, [joke]);

  const handleChange = (event) => {
    setJoke(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="joke">Joke: </label>
        <input value={joke} onChange={handleChange} id="joke" />
      </form>
      {joke ? <italic>{joke}</italic> : "Please tell me a joke. 🤡"}
    </div>
  );
};

const App = () => {
  return <TellAJoke />;
};

export default App;
