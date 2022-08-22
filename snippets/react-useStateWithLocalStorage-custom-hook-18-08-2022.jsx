import React, { useState, useEffect } from "react";

// Reusable custom hook that looks for a key in localStorage if the key exists and updates its value.
const useStateWithLocalStorage = (key, defaultValue = "") => {
  const [state, setState] = useState(
    () => localStorage.getItem(key) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};

const Birthday = ({ initialGuestOfHonor = "Guillaume" }) => {
  const [guest, setGuest] = useStateWithLocalStorage(
    "guestOfHonor",
    initialGuestOfHonor
  );

  const handleChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="guest">Guest of honor: </label>
        <input id="guest" value={guest} onChange={handleChange} />
      </form>
      {guest ? (
        <span>Happy birthday, {guest} 🎂</span>
      ) : (
        <span>"Whose birthday is it today?"</span>
      )}
    </div>
  );
};

const App = () => {
  return <Birthday />;
};
export default App;
