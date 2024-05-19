import React, { useState } from "react";

const BookItem = ({ book, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false); //Sets edit mode off to start
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleUpdate = () => {
    onUpdate(book.id, updatedBook); //Passes book id and updated info to function
    setIsEditing(false); 
  };

  return (
    <li>
      {isEditing ? ( //"IF" is editing then
        <div>
          <label>
            Title:
            <input
              type="text"
              value={updatedBook.title}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, title: e.target.value })
              }
              placeholder="Title"
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              value={updatedBook.author}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, author: e.target.value })
              }
              placeholder="Author"
            />
          </label>
          <label>
            Genre:
            <input
              type="text"
              value={updatedBook.genre}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, genre: e.target.value })
              }
              placeholder="Genre"
            />
          </label>
          <label>
            Description:
            <textarea
              value={updatedBook.description}
              onChange={(e) =>
                setUpdatedBook({ ...updatedBook, description: e.target.value })
              }
              placeholder="Description"
            />
          </label>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) :
      ( //The rest of this should be executed instead if isEditing is false 
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>{book.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(book.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default BookItem;
