const express = require('express');
const router = express.Router();

// Sample book data (in a real app, this would come from a database)
const books = [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' }
];

// GET all books
router.get('/', (req, res) => {
    res.json(books);
});

// GET a book by ID
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST a new book (not connected to a database)
router.post('/', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Book not found');
    }
});

module.exports = router;