import React, { useState, useEffect } from "react";

const Library = ({ defaultBook = "" }) => {
  // Start by seeing if the book value exists in our localStorage:
  const [book, setBook] = useState(localStorage.getItem("book") ?? defaultBook);

  // Let's set the name in our localStorage with useEffect:
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
