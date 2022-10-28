import React, {useReducer} from "react"

const gelatoReducer = (state, action) => ({...state, ...action});

const Gelato = ({initialAmount = 0, change = 1}) => {

  const [state, setState] = useReducer(gelatoReducer, {amount: initialAmount});
  const {amount} = state;
  const addGelato = () => setState({amount: amount + change});
  
  return <button onClick={addGelato}>{amount}</button>;
}

const App = () => {
  return <Gelato />;
}

export default App;