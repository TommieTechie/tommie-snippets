import React from "react";

const Internship = () => {
  const [company, setCompany] = React.useState("");

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="company">Company: </label>
        <input onChange={handleChange} id="company" />
      </form>
      {company ? (
        <strong>You would like to be an intern at {company}.</strong>
      ) : (
        "Please type the company where you'd like to be an intern."
      )}
    </div>
  );
};

const App = () => {
  return <Internship />;
};

export default App;
