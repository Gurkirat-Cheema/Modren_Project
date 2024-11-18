// src/pages/Books.js
import React from 'react';
import BookList from '../components/BookList';

const Books = () => {
    return <div>
    <h1>Books Page</h1>
    <BookList /> {/* Render the BookList component here */}
</div>;
};

export default Books;