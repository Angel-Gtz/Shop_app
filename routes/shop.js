// Path
const path = require('path')

// Import express
const express = require('express');

// Root directory path
const rootDir = require('../util/path');

// Import routes
const router = express.Router();

// Admin dummy data 
const adminData = require('./admin')

// Routes
router.get('/', (req, res, next) => {
    console.log(adminData.products)
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});


module.exports = router;

