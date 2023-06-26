// Express
const express = require('express');
const app = express();

// Modules
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

// Port
const port = 8080;

app.get('*', (req, res) => {
    const searchTerm = req.params
    res.send(`Search term: ${ searchTerm[0].slice(1, searchTerm[0].length) }`)
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the home page<h1/>')
});

// Modules routes

app.use(shopRoutes)

app.use('/shop', adminRoutes)

app.get('/product', (req, res) => {
    res.send('<h1>Product page<h1/>')
});


// App Use

app.use((req, res) => {
    const searchTerm = req.query.term
    console.log(searchTerm)
    res.status(404).send(`<h1>Sorry but we couldn't found any results for ${searchTerm}<h1/>`)
});



// App listener 
app.listen(port, () => console.log(`Listening in port ${port}`));