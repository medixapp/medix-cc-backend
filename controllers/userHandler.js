const { nanoid } = require('nanoid');
const users = require('../data/users');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${nanoid(16)}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

// Get profile
const getProfile = (req, res) => {
	const user = users.find((user) => user.id === req.session.userId);
	if (user) {
		const { password, ...userWithoutPassword } = user;
		res.status(200).json({ status: 'success', user: userWithoutPassword });
	} else {
		res.status(404).json({ status: 'fail', message: 'User not found' });
	}
};

// Updating description for profile page and profile picture image
const updateProfile = async (req, res) => {
    try {
        const user = users.find((user) => user.id === req.session.userId);
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'User not found' });
        }

        const { username, email, description } = req.body;
        const profileImage = req.file ? req.file.filename : user.profileImage;

        user.username = username || user.username;
        user.email = email || user.email;
        user.description = description || user.description;
        user.profileImage = profileImage;

        res.status(200).json({ status: 'success', message: 'Profile updated successfully', user });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
    }
};

module.exports = { getProfile, updateProfile, upload };
