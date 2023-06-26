const express = require('express');

// Router 

const router = express.Router();

router.get('/motorcycles', (req, res) => {
    res.send('<h1>Motorcycle page<h1/>')
});

router.get('/accessories', (req, res) => {
    res.send('<h1>Accessories page<h1/>')
});

module.exports = router;