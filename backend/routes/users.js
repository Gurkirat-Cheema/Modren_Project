const express = require('express');
const router = express.Router();

// Sample user data (in a real app, this would come from a database)
const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com' }
];

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET a user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// POST a new user (not connected to a database)
router.post('/', (req, res) => {
    const newUser = {
        id: users.length + 1,
        username: req.body.username,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// DELETE a user by ID
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

module.exports = router;