const { nanoid } = require('nanoid');
const multer = require('multer');
const path = require('path');
const { usersCollection } = require('../services/database/storeUser');
const { uploadImage, getPublicUrl } = require('../services/database/storePicture');

// Configure multer for file uploads (store them in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Get profile
const getProfile = async (req, res) => {
	try {
		const userId = req.session.userId;
		const userDoc = await usersCollection.doc(userId).get();

		if (!userDoc.exists) {
			return res.status(404).json({ status: 'fail', message: 'User not found' });
		}

		const user = userDoc.data();
		const { password, ...userWithoutPassword } = user;

		res.status(200).json({ status: 'success', user: userWithoutPassword });
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

// Updating description for profile page and profile picture image
const updateProfile = async (req, res) => {
	try {
		const userId = req.user.id; // Retrieved from the middleware
		const { description } = req.body;
		let profileImage = req.user.profileImage;

		if (req.file) {
			const gcsFileName = `userProfilepict/${nanoid(16)}${path.extname(req.file.originalname)}`;

			// Upload the image to Google Cloud Storage
			await uploadImage(req.file.buffer, gcsFileName);

			// Get the public URL for the uploaded image
			profileImage = getPublicUrl(gcsFileName);
		}

		await usersCollection.doc(userId).update({
			description: description || req.user.description,
			profileImage: profileImage,
		});

		const updatedUserDoc = await usersCollection.doc(userId).get();
		const updatedUser = updatedUserDoc.data();
		const { password, ...userWithoutPassword } = updatedUser;

		res.status(200).json({ status: 'success', message: 'Profile updated successfully', user: userWithoutPassword });
	} catch (err) {
		res.status(500).json({ status: 'fail', message: 'Server error', error: err.message });
	}
};

module.exports = { getProfile, updateProfile, upload };
