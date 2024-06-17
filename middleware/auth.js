const { usersCollection } = require('../services/database/storeUser');

const isAuthenticated = async (req, res, next) => {
	try {
		if (!req.session?.userId) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		const userDoc = await usersCollection.doc(req.session.userId).get();
		if (!userDoc.exists) {
			return res.status(401).json({ status: 'fail', message: 'Unauthorized' });
		}

		req.user = userDoc.data();
		next();
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

module.exports = isAuthenticated;
