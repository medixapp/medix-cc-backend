const { nanoid } = require('nanoid');
const {
	classificationEmbedding,
	classificationOneHot,
	preprocessInputEmbedding,
	preprocessInputOneHot,
} = require('../services/classification');
const allSymptoms = require('../data/allSymptoms');
const diseaseInfo = require('../data/medicineInfo');
const model = require('../data/model');

const embeddingPredict = async (req, res) => {
	try {
		const { text } = req.body;
		const { modelA } = req.app;
		const id = nanoid();
		const createdAt = new Date().toISOString();

		const data = {
			id: id,
			results: [],
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputEmbedding(text);
		const predictions = await classificationEmbedding(modelA, preprocessedInput);

		const sortedPredictions = predictions.slice().sort((a, b) => b.confidence - a.confidence);
		const finalPredictions = sortedPredictions.slice(0, 3).map(({ label, desc, penyebab }) => ({
			label,
			desc,
			penyebab,
		}));

		data.results = finalPredictions;
		data.result = finalPredictions[0].label;

		const response = {
			id: id,
			results: finalPredictions,
			createdAt: createdAt,
		};

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data: response,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const oneHotPredict = async (req, res) => {
	try {
		const { inputSymptoms } = req.body;
		const { modelB } = req.app;
		const id = nanoid();
		const createdAt = new Date().toISOString();

		const data = {
			id: id,
			result: '',
			desc: '',
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputOneHot(inputSymptoms, allSymptoms);
		const predictions = await classificationOneHot(modelB, preprocessedInput);
		const sortedPredictions = predictions.slice().sort((a, b) => b.confidence - a.confidence);
		const finalPredictions = sortedPredictions.slice(0, 3).map(({ label, desc, penyebab }) => ({
			label,
			desc,
			penyebab,
		}));

		data.results = finalPredictions;
		data.result = finalPredictions[0].label;

		const response = {
			id: id,
			results: finalPredictions,
			createdAt: createdAt,
		};

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data: response,
		});
	} catch (error) {
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
			response,
		},
	});
};

const getPredictByResult = async (req, res) => {
	try {
		const { result } = req.params;
		const filteredResults = model.filter((entry) => entry.result === result);

		if (filteredResults.length === 0) {
			return res.status(404).json({
				status: 'fail',
				message: `No predictions found with result: ${result}`,
			});
		}

		const enrichedResults = filteredResults
			.map(({ createdAt }) => {
				const diseaseEntries = diseaseInfo[result] || [];
				return diseaseEntries.map((diseaseEntry) => ({
					medicine: diseaseEntry.medicine,
					description: diseaseEntry.description,
					createdAt,
				}));
			})
			.flat();

		res.status(200).json({
			status: 'success',
			medicines: enrichedResults,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam mengambil prediksi: ${error.message}`,
		});
	}
};

module.exports = { embeddingPredict, oneHotPredict, getALLPredict, getPredictByResult };
