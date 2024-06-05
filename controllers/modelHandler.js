const { nanoid } = require('nanoid');
const {
	predictClassificationDevin,
	preprocessInputDevin,
	predictClassificationDesika,
	preprocessInputDesika,
} = require('../services/classification');
const allSymptoms = require('../data/allSymptoms');
const model = require('../data/model');

const diseasePredictDevin = async (req, res) => {
	try {
		const { text } = req.body;
		const { modelA } = req.app;
		const id = nanoid();
		const createdAt = new Date().toISOString();

		const data = {
			id: id,
			result: '',
			suggestion: '',
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputDevin(text);
		const { label, suggestion } = await predictClassificationDevin(modelA, preprocessedInput);

		data.result = label;
		data.suggestion = suggestion;

		res.status(200).json({
			status: 'success',
			message: 'Model Devin Berhasil diprediksi',
			data,
		});
	} catch (error) {
		console.error('Error in diseasePredictHandler:', error.message);
		console.error('Stack trace:', error.stack);
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const diseasePredictDesika = async (req, res) => {
	try {
		const { inputSymptoms } = req.body;
		const { modelB } = req.app;

		const id = nanoid();
		const createdAt = new Date().toISOString();

		const data = {
			id: id,
			result: '',
			suggestion: '',
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputDesika(inputSymptoms, allSymptoms);
		const { label, suggestion } = await predictClassificationDesika(modelB, preprocessedInput);

		data.result = label;
		data.suggestion = suggestion;

		res.status(200).json({
			status: 'success',
			message: 'Model predicted successfully',
			data,
		});
	} catch (error) {
		console.error('Error in diseasePredictHandler:', error.message);
		console.error('Stack trace:', error.stack);
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const getALLPredict = async (req, res) => {
	res.json({
		status: 'success',
		data: {
			model,
		},
	});
};

module.exports = { diseasePredictDevin, diseasePredictDesika, getALLPredict };
