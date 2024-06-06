const { nanoid } = require('nanoid');
const {
	predictClassificationDevin,
	preprocessInputDevin,
	predictClassificationDesika,
	preprocessInputDesika,
} = require('../services/classification');
const allSymptoms = require('../data/allSymptoms');
const diseaseInfo = require('../data/medicineInfo');
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
			desc: '',
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputDevin(text);
		const { label, desc } = await predictClassificationDevin(modelA, preprocessedInput);
		data.result = label;
		data.desc = desc;

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data,
		});
	} catch (error) {
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
			desc: '',
			createdAt: createdAt,
		};
		model.push(data);

		const preprocessedInput = preprocessInputDesika(inputSymptoms, allSymptoms);
		const { label, desc } = await predictClassificationDesika(modelB, preprocessedInput);
		data.result = label;
		data.desc = desc;

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data,
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
			model,
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

module.exports = { diseasePredictDevin, diseasePredictDesika, getALLPredict, getPredictByResult };
