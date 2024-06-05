const { nanoid } = require('nanoid');
const users = require('../data/users');
const bcrypt = require('bcrypt');

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
				message: 'User registered successfully',
				data: {
					userId: id,
				},
			});
		} else {
			res.status(404).json({
				status: 'fail',
				message: 'User registration failed',
			});
		}
	} catch (err) {
		res.status(500).json({
			status: 'fail',
			message: 'Server error',
		});
	}
};

// Login Area
const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = users.find((user) => user.email === email);

		if (!user) {
			req.flash('error', 'User does not exist');
			return res.status(400).json({ status: 'fail', message: 'User does not exist' });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			req.flash('error', 'Invalid credentials');
			return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
		}

		req.session.userId = user.id;
		res.status(200).json({ status: 'success', message: 'Logged in successfully' });
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

// Logout Area
const logout = (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).json({ status: 'fail', message: 'Logout failed' });
		}
		res.status(200).json({ status: 'success', message: 'Logged out successfully' });
	});
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

module.exports = { register, login, logout, getAllUserRegister };
