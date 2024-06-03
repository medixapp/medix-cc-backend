const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const routes = require('./routes/routes');
// const loadModel = require('../services/loadModel');

const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));
app.use(flash());

// const model = await loadModel();
// app.locals.model = model;

app.use('/', routes);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
