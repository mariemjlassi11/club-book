// src/pages/Books.js
import React, { useState } from 'react';
import './Books.css';

const Books = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState({});

  // Add a new book
  const handleAddBook = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!title) {
      formErrors.title = 'Title is required';
    }
    if (!description || description.length < 5) {
      formErrors.description = 'Description must be at least 5 characters';
    }

    if (Object.keys(formErrors).length === 0) {
      const newBook = { title, description };
      setBooks([...books, newBook]);
      setTitle('');
      setDescription('');
    } else {
      setErrors(formErrors);
    }
  };

  // Remove a book
  const handleRemoveBook = (index) => {
    const updatedBooks = books.filter((book, idx) => idx !== index);
    setBooks(updatedBooks);
  };

  return (
    <div className="books-container">
      <h2><br></br>Add a New Book</h2>
      <form onSubmit={handleAddBook}>
        <div className="input-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="input-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <button type="submit">Add Book</button>
      </form>

      <div className="book-list">
        <h3>Book List</h3>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : ( 
          <ul>
            {books.map((book, index) => (
              <li key={index}>
                <strong>{book.title}</strong>: {book.description}
                <button className="remove-btn" onClick={() => handleRemoveBook(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Books;
