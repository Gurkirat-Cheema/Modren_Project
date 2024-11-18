import React, { useEffect, useState } from 'react';
import './BookList.css'; // Create this file for additional styles

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:3000/api/books');
      const data = await response.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  return (
    <ul>
      {books.map(book => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author} <em>({book.genre})</em>
        </li>
      ))}
    </ul>
  );
};

export default BookList;