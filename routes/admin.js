// path
const path = require('path');

// Express
const express = require('express');

// Root directory path
const rootDir = require('../util/path'); // Not in use

// Router 
const router = express.Router();

// Controller
const productsController = require('../controllers/products'); 

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;

