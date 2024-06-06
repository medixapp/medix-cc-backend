require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const auth = require('./routes/auth');
const predict = require('./routes/predict');
const { loadModelDevin, loadModelDesika } = require('./services/loadmodel');

const startServer = async () => {
	const port = 3000;
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(
		session({
			secret: 'your_secret_key', // Replace with a strong secret
			resave: false,
			saveUninitialized: true,
			cookie: { secure: false }, // Set to true if using HTTPS
		})
	);
	app.use(flash());

	try {
		const modelA = await loadModelDevin();
		app.modelA = modelA;

		const modelB = await loadModelDesika();
		app.modelB = modelB;

		app.use('/', auth);
		app.use('/', predict);

		app.listen(port, () => {
			console.log(`http://localhost:${port}`);
		});
	} catch (error) {
		console.error('Stack trace:', error.stack);
	}
};

startServer().catch((err) => {
	console.error('Unexpected error starting server:', err.message);
	console.error('Stack trace:', err.stack);
});
