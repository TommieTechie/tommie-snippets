import React from "react";

const IceCreamForm = (props) => {
  const iceCreamInputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitIceCream(iceCreamInputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="iceCreamInput">Ice cream flavour:</label>
        <input id="iceCreamInput" type="text" ref={iceCreamInputRef} />
      </div>
      <button type="submit">Order🍦</button>
    </form>
  );
}

const IceCreamApp = () => {
  const onSubmitIceCream = iceCream => alert(`You ordered: ${iceCream} ice cream`);
  return <IceCreamForm onSubmitIceCream={onSubmitIceCream} />;
}

export default IceCreamApp;