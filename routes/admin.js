// path
const path = require('path');

// Express
const express = require('express');

// Root directory path
const rootDir = require('../util/path');

// Router 
const router = express.Router();

// Dummy data 
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    // products.push( {title: req.body.title} )
    res.redirect('/')
});

exports.routes = router;
exports.products = products;