const { nanoid } = require('nanoid');
const multer = require('multer');
const path = require('path');
const { usersCollection } = require('../services/storeUser');
const { uploadImage, getPublicUrl } = require('../services/storePicture');

// Configure multer for file uploads (store them temporarily)
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/'); // Temporarily store files locally before uploading to GCS
	},
	filename: (req, file, cb) => {
		cb(null, `${nanoid(16)}${path.extname(file.originalname)}`);
	},
});

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
		const userId = req.session.userId;
		const userDoc = await usersCollection.doc(userId).get();

		if (!userDoc.exists) {
			return res.status(404).json({ status: 'fail', message: 'User not found' });
		}

		const { description } = req.body;
		let profileImage = userDoc.data().profileImage;

		if (req.file) {
			const gcsFileName = `${nanoid(16)}${path.extname(req.file.originalname)}`;
			const filePath = req.file.path;

			// Upload the image to Google Cloud Storage
			await uploadImage(filePath, gcsFileName);

			// Get the public URL for the uploaded image
			profileImage = getPublicUrl(gcsFileName);
		}

		await usersCollection.doc(userId).update({
			description: description || userDoc.data().description,
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
