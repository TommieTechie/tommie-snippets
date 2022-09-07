import React, { useState } from "react";

const StudentName = ({ name, onNameChange }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={onNameChange}
        placeholder="Miguel"
      />
    </div>
  );
};

// Notice how the studentNumber state could've been in App, but it is currently
// in the StudentNumber component, where it's more relevant!
const StudentNumber = () => {
  const [studentNumber, setStudentNumber] = useState("");

  return (
    <div>
      <label htmlFor="studentNumber">Student number: </label>
      <input
        id="studentNumber"
        value={studentNumber}
        onChange={(event) => setStudentNumber(event.target.value)}
        placeholder="12345"
      />
    </div>
  );
};

const Greeting = ({ name }) => {
  return <div>{`Welcome back to school ${name} 🎒`}</div>;
};

const App = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <StudentName
        name={name}
        onNameChange={(event) => setName(event.target.value)}
      />
      <StudentNumber />
      <Greeting name={name} />
    </form>
  );
};

export default App;
