import React, {useReducer} from "react";

const gelatoReducer = (amount, change) => amount + change;

const Gelato = ({initialAmount = 10, step = 2}) => {

  const [numberOfGelato, setNumberOfGelato] = useReducer(gelatoReducer, initialAmount);

  const addGelato = () => setNumberOfGelato(step);
  
  return <button onClick={addGelato}>{numberOfGelato}</button>;
}

const App = () => {
  return <Gelato />;
}

export default App;