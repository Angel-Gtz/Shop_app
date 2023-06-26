// Import express
const express = require('express');

// Import routes
const router = express.Router();

// Route
router.get('/shop', (req, res, next) => {
    res.send('<h1>Welcome to the shop<h1/>')
});

module.exports = router;

