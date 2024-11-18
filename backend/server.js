// backend/server.js
const express = require('express');
const cors = require('cors'); // Import CORS
const logger = require('./middleware/logger');
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON bodies
app.use(logger); // Custom logger middleware

// Routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});