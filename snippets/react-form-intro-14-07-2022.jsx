import React from "react";

const PronounsForm = (props) => {

  const handleSubmit = (event) => {
    /*
    This prevents form submit events' default behaviour (page refresh).
    Read more here: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    */
    event.preventDefault();
    const pronouns = event.target.elements[0].value;
    props.onSubmitPronouns(pronouns);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* The htmlFor prop associates the label to its input. */}
        <label htmlFor="pronouns">Pronouns:</label>
        <input type="text" id="pronouns"/>
      </div>
      <button type="submit">Submit 🏳️‍⚧️</button>
    </form>
  );
}

const PronounsApp = () => {
  const onSubmitPronouns = pronouns => alert(`Your pronouns are: ${pronouns} 🏳️‍🌈`);
  return <PronounsForm onSubmitPronouns={onSubmitPronouns} />;
}

export default PronounsApp;