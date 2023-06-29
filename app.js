// Express
const express = require('express');
const app = express();

// View engine
app.set('view engine', 'pug');

// Path
const path = require('path');

// Body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')))

// Modules
const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');

// Port
const port = 8080;

// Modules routes

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.get('/product', (req, res) => {
    res.send('<h1>Product page<h1/>')
});

// Error 404 not found

app.use('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



// App listener 
app.listen(port, () => console.log(`Listening in port ${port}`));