const { nanoid } = require('nanoid');
const {
	classificationEmbedding,
	classificationOneHot,
	preprocessInputEmbedding,
	preprocessInputOneHot,
} = require('../services/classification');
const { symptomsArray } = require('../data/allSymptoms');
const { storeModel, db } = require('../services/database/storeModel');
const diseaseInfo = require('../data/medicineInfo');

const embeddingPredict = async (req, res) => {
	try {
		const { text } = req.body;
		const { modelA } = req.app;
		const id = nanoid();
		const createdAt = new Date().toISOString();

		const preprocessedInput = preprocessInputEmbedding(text);
		const predictions = await classificationEmbedding(modelA, preprocessedInput);
		const sortedPredictions = predictions.slice().sort((a, b) => b.confidence - a.confidence);
		const finalPredictions = sortedPredictions.slice(0, 3).map(({ label, confidence, desc, penyebab }) => ({
			label,
			desc,
			confidence: confidence,
			penyebab,
		}));

		const data = {
			id,
			results: finalPredictions,
			labels: finalPredictions.map(({ label }) => label),
			createdAt,
		};
		await storeModel(id, data);

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data: finalPredictions,
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

		const preprocessedInput = preprocessInputOneHot(inputSymptoms, symptomsArray);
		const predictions = await classificationOneHot(modelB, preprocessedInput);
		const sortedPredictions = predictions.slice().sort((a, b) => b.confidence - a.confidence);
		const finalPredictions = sortedPredictions.slice(0, 3).map(({ label, confidence, desc, penyebab }) => ({
			label,
			desc,
			confidence: confidence,
			penyebab,
		}));

		const data = {
			id,
			results: finalPredictions,
			labels: finalPredictions.map(({ label }) => label),
			createdAt,
		};
		await storeModel(id, data);

		res.status(200).json({
			status: 'success',
			message: 'Model Berhasil diprediksi',
			data: finalPredictions,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam melakukan prediksi: ${error.message}`,
		});
	}
};

const getALLPredict = async (req, res) => {
	try {
		const snapshot = await db.collection('hasil').get();
		const predictions = snapshot.docs.map((doc) => doc.data());

		res.status(200).json({
			status: 'success',
			data: predictions,
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam mengambil semua prediksi: ${error.message}`,
		});
	}
};

const getPredictByLabel = async (req, res) => {
	try {
		const { label } = req.params;
		const snapshot = await db.collection('hasil').where('labels', 'array-contains', label).get();
		if (snapshot.empty) {
			return res.status(404).json({
				status: 'fail',
				message: 'Tidak ada prediksi yang ditemukan dengan label tersebut',
			});
		}

		const predictions = snapshot.docs.map((doc) => doc.data());
		const info = diseaseInfo[label];
		if (!info) {
			return res.status(200).json({
				status: 'success',
				data: predictions,
				message: 'Informasi penyakit tidak ditemukan untuk label tersebut',
			});
		}

		res.status(200).json({
			status: 'success',
			data: {
				info,
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'fail',
			message: `Terjadi kesalahan dalam mengambil prediksi: ${error.message}`,
		});
	}
};

module.exports = { embeddingPredict, oneHotPredict, getALLPredict, getPredictByLabel };
