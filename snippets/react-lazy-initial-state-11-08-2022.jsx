import React, { useState, useEffect } from "react";

const Library = ({ defaultBook = "" }) => {
  // Use lazy initial state to prevent reading from localStorage on each render:
  const [book, setBook] = React.useState(
    () => window.localStorage.getItem("book") ?? defaultBook
  );

  useEffect(() => {
    localStorage.setItem("book", book);
  });

  const handleChange = (event) => {
    setBook(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="book">Book(s): </label>
        <input id="book" value={book} onChange={handleChange} />
      </form>
      {book ? (
        <span>I'd like to borrow {book}, please.</span>
      ) : (
        "Which book(s) would you like to borrow? 📚"
      )}
    </div>
  );
};

export const App = () => {
  return <Library />;
};
