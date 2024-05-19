import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import "./App.css";

const API_URL = "https://66479e772bb946cf2f9e5f0a.mockapi.io/api/books"; // URL for my mockAPI for the book data

const App = () => {
  const [books, setBooks] = useState([]);
  // Initializes an empty array


  // this useEffect is used to get the data from the API
  useEffect(() => {
    fetch(API_URL) //Fetch from API
      .then((response) => response.json()) //Gets converted to JSON
      .then((data) => setBooks(data)) //That info gets updated to books state
      .catch((error) => console.error("Error fetching data:", error));
  }, []);



  const createBook = (book) => {
    fetch(API_URL, {
      method: "POST", //Create new data on the API
      headers: { //data being sent in JSON format
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book), //The info sent is converted to JSON string
    })
      .then((response) => response.json())
      .then((data) => setBooks([...books, data])) //Updates books state
      .catch((error) => console.error("Error creating book:", error));
  };



  const updateBook = (id, updatedBook) => {
    fetch(`${API_URL}/${id}`, {//The URL and book id made to specify a book
      method: "PUT", //Updates existing data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((response) => response.json())
      .then((data) =>
        //Maps over books array to look for specific book id. If found, replaces/updates data for that book
        setBooks(books.map((book) => (book.id === id ? data : book)))
      )
      .catch((error) => console.error("Error updating book:", error));
  };



  const deleteBook = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then(() => setBooks(books.filter((book) => book.id !== id)))
      .catch((error) => console.error("Error deleting book:", error));
  };



  return (
    <div className="container">
      <h1>Book Collection Manager</h1>
      <BookForm onSubmit={createBook} />
      <BookList books={books} onUpdate={updateBook} onDelete={deleteBook} />
    </div>
  );
};



export default App;
