import React, { useState } from "react";

const Taco = ({ taco, onTacoChange }) => {
  return (
    <div>
      <label htmlFor="taco">Taco: </label>
      <input
        id="taco"
        value={taco}
        onChange={onTacoChange}
        placeholder="Camarón"
      />
    </div>
  );
};

const Bebida = ({ bebida, onBebidaChange }) => {
  return (
    <div>
      <label htmlFor="bebida">Bebida: </label>
      <input
        id="bebida"
        value={bebida}
        onChange={onBebidaChange}
        placeholder="Horchata"
      />
    </div>
  );
};

const Order = ({ taco, bebida }) => {
  return (
    <div>{`Me gustaría un(a) ${taco} taco y beber un(a) ${bebida} por favor. 🌮`}</div>
  );
};

const App = () => {
  const [taco, setTaco] = useState("");
  const [bebida, setBebida] = useState("");

  return (
    <form>
      <Taco taco={taco} onTacoChange={(event) => setTaco(event.target.value)} />
      <Bebida
        bebida={bebida}
        onBebidaChange={(event) => setBebida(event.target.value)}
      />
      <Order taco={taco} bebida={bebida} />
    </form>
  );
};

export default App;
