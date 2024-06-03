const { nanoid } = require('nanoid');
// const { predictClassification } = require('../services/classification');
const express = require('express');
const users = require('../data/users');
const bcrypt = require('bcrypt');

//Disease Prediction Area
// async function diseasePredictHandler(request, h) {
// 	const { text } = request.payload;
// 	const { model } = request.server.app;

// 	const id = crypto.randomUUID();
// 	const createdAt = new Date().toISOString();

// 	const data = {
// 		id: id,
// 		result: '',
// 		suggestion: '',
// 		createdAt: createdAt,
// 	};

// 	try {
// 		predictionHistory.push(data);

// 		const { label, suggestion } = await predictClassification(model, text);

// 		data.result = label;
// 		data.suggestion = suggestion;

// 		const response = h.response({
// 			status: 'success',
// 			message: 'Model predicted successfully',
// 			data,
// 		});
// 		response.code(201);
// 		return response;
// 	} catch (error) {
// 		return h
// 			.response({
// 				status: 'fail',
// 				message: `Terjadi kesalahan dalam melakukan prediksi`,
// 			})
// 			.code(400);
// 	}
// }

// diseasePredictHandler