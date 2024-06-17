require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const auth = require('./routes/auth');
const predict = require('./routes/predict');
const article = require('./routes/article');
const { loadModelEmbedding, loadModelOnehot } = require('./services/loadmodel');

const startServer = async () => {
	const port = 3000;
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: true,
			cookie: { secure: false }, // Set to true if using HTTPS
		})
	);
	app.use(flash());

	try {
		const modelA = await loadModelEmbedding();
		app.modelA = modelA;
		const modelB = await loadModelOnehot();
		app.modelB = modelB;

		app.get('/', (req, res) => {
			res.send('Hai ini API Untuk Medix-App JWT TOKEN');
		});

		app.use('/', auth);
		app.use('/', predict);
		app.use('/', article);

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
