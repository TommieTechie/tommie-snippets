import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>⚠️ Something went wrong with the coffee machine:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

const CoffeeMachine = () => {
  throw new Error("Coffee machine is out of order. ⛔");
};

const App = () => {
  const [brew, setBrew] = useState(false);
  const handleClick = () => setBrew(true);

  return (
    <div>
      <button onClick={handleClick}>Toggle the coffee machine. ☕</button>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {brew ? <CoffeeMachine /> : null}
      </ErrorBoundary>
    </div>
  );
};

export default App;
