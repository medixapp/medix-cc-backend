const { nanoid } = require('nanoid');
// const { predictClassification } = require('../services/classification');
const express = require('express');
const users = require('./users');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register Area
const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const id = nanoid(16);

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const addUser = {
			id,
			username,
			email,
			password: passwordHash,
		};
		users.push(addUser);
		const isSuccess = users.filter((user) => user.id === id).length > 0;
		if (isSuccess) {
			res.status(200).json({
				status: 'success',
				message: 'User berhasil Login',
				data: {
					userId: id,
				},
			});
		} else {
			res.status(404).json({
				status: 'fail',
				message: 'User Gagal Login',
			});
		}
	} catch (err) {
		res.status(500).json({
			status: 'fail',
			message: 'Server Broken',
		});
	}
};

//Testing Area
const getAllUserRegister = (req, res) => {
	res.json({
		status: 'success',
		data: {
			users,
		},
	});
};

//login Area
const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = users.find((user) => user.email === email);

		if (!user) {
			return res.status(400).json({ status: 'fail', message: 'User does not exist' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
		}

		const { password: _, ...userWithoutPassword } = user;
		res.status(200).json({ status: 'success', user: userWithoutPassword });
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

//Testing Area
const getAllUserLogin = (req, res) => {
	res.json({
		status: 'success',
		data: {
			users,
		},
	});
};

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
module.exports = { register, getAllUserRegister, login, getAllUserLogin };
