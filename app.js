// Express
const express = require('express');
const app = express();

// Set templating engine 
app.set('view engine', 'ejs');
app.set('views', 'views');

// Path
const path = require('path');

// // Body parser 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// // Serving static files
app.use(express.static(path.join(__dirname, 'public')))

// // Modules
const shopRoutes = require('./routes/shop'); // ERR
const adminRoutes = require('./routes/admin'); //ERR

// // Controllers
const error = require('./controllers/error404')

// // Modules routes
app.use('/admin', adminRoutes); //ERR
app.use(shopRoutes);//ERR

// Error 404 not found
app.use(error.get404)

// // Port
const port = 8080;

// // App listener 
app.listen(port, () => console.log(`Listening in port ${port}`));


