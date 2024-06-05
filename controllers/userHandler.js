const users = require('../data/users');

const getProfile = (req, res) => {
	const user = users.find((user) => user.id === req.session.userId);
	if (user) {
		const { password, ...userWithoutPassword } = user;
		res.status(200).json({ status: 'success', user: userWithoutPassword });
	} else {
		res.status(404).json({ status: 'fail', message: 'User not found' });
	}
};

module.exports = { getProfile };
