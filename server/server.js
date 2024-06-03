const express = require('express');
const app = express();
const routes = require('./routes');
// const loadModel = require('../services/loadModel');

const port = 3000;

app.use(express.json());

// const model = await loadModel();
// app.locals.model = model;

app.use('/', routes);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
