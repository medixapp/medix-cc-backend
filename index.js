require('dotenv').config();
const express = require('express');
const app = express();
const auth = require('./routes/auth');
const predict = require('./routes/predict');
const article = require('./routes/article');
const { loadModelEmbedding, loadModelOnehot } = require('./services/loadmodel');

const startServer = async () => {
	const port = process.env.PORT;
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	try {
		const modelA = await loadModelEmbedding();
		app.modelA = modelA;
		const modelB = await loadModelOnehot();
		app.modelB = modelB;

		app.get('/', (req, res) => {
			res.send('Hai ini API Server 1 Untuk Medix-App!');
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
