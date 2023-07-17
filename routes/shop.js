// Import express
const express = require('express');

// Import routes
const router = express.Router();

// Controller 
const productsController = require('../controllers/products')

// Routes
router.get('/', productsController.getProducts);


module.exports = router;
