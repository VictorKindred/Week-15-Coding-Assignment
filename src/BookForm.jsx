import React, { useState } from "react";

const BookForm = ({ onSubmit }) => {
  const [book, setBook] = useState({ //sets the properties for the books when submit is clicked
    title: "",
    author: "",
    genre: "",
    description: "",
  });



  const handleSubmit = (e) => {
    e.preventDefault(); //Prevents the page from refreshing after click
    onSubmit(book);
    setBook({ //Resets form after submission
      title: "",
      author: "",
      genre: "",
      description: "",
    });
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        placeholder="Title"
      />
      <input
        type="text"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        placeholder="Author"
      />
      <input
        type="text"
        value={book.genre}
        onChange={(e) => setBook({ ...book, genre: e.target.value })}
        placeholder="Genre"
      />
      <textarea
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
        placeholder="Description"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
