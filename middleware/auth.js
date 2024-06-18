const { usersCollection } = require('../services/database/storeUser');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const isAuthenticated = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		const token = authHeader.split(' ')[1];
		if (!token) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		const decoded = jwt.verify(token, JWT_SECRET);
		if (!decoded.userId) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		const userDoc = await usersCollection.doc(decoded.userId).get();
		if (!userDoc.exists) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		req.user = userDoc.data();
		next();
	} catch (err) {
		if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

module.exports = isAuthenticated;
