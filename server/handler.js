const { nanoid } = require('nanoid');
const express = require('express');
const users = require('./users');
const bcrypt = require('bcrypt');

const router = express.Router();

// Register Area
const addUserRegister = async (req, res) => {
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

const getAllUsers = (req, res) => {
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

const getAllUserLogin = (req, res) => {
	res.json({
		status: 'success',
		data: {
			users,
		},
	});
};

module.exports = { addUserRegister, getAllUsers, login, getAllUserLogin };
