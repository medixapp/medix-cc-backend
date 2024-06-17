const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const { storeData, db } = require('../services/database/storeUser');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// Register Area
const register = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		
		// Check if email already exists
		const usersRef = db.collection('users');
		const querySnapshot = await usersRef.where('email', '==', email).get();
		if (!querySnapshot.empty) {
			return res.status(400).json({
				status: 'fail',
				message: 'Email already exists',
			});
		}

		const id = nanoid(16);
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const addUser = {
			id,
			username,
			email,
			password: passwordHash,
			description: '',
			profileImage: '',
		};
		await storeData(id, addUser);

		res.status(200).json({
			status: 'success',
			message: 'User registered successfully',
			data: {
				userId: id,
			},
		});
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

		// Fetch user from Firestore
		const usersRef = db.collection('users');
		const querySnapshot = await usersRef.where('email', '==', email).get();

		if (querySnapshot.empty) {
			req.flash('error', 'User does not exist');
			return res.status(400).json({ status: 'fail', message: 'User does not exist' });
		}

		const userDoc = querySnapshot.docs[0];
		const user = userDoc.data();

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			req.flash('error', 'Invalid credentials');
			return res.status(400).json({ status: 'fail', message: 'Invalid credentials' });
		}

		const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '720h' });

		res.status(200).json({
			status: 'success',
			message: 'Logged in successfully',
			loginResult: {
				userId: user.id,
				name: user.username,
				token: token,
			},
		});
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
const getAllUserRegister = async (req, res) => {
	try {
		const usersRef = db.collection('users');
		const querySnapshot = await usersRef.get();
		const users = querySnapshot.docs.map((doc) => doc.data());

		res.json({
			status: 'success',
			data: {
				users,
			},
		});
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

module.exports = { register, login, logout, getAllUserRegister };
