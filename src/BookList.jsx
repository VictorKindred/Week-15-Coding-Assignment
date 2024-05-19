import React from "react";
import BookItem from "./BookItem";

// jsx for listing the books that the users put in, can also take the delete and update function
const BookList = ({ books, onUpdate, onDelete }) => {
  return (
    <ul>
      {books.map((book) => ( //Makes each book object into BookItem component
        <BookItem
        // Each book is given a key and the ability to trigger update and delete functions
          key={book.id}
          book={book}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default BookList;
