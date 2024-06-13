const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
	projectId: 'testing-medix',
	keyFilename: './serviceAccountKey.json',
});

const bucketName = 'medix-bucket';

const bucket = storage.bucket(bucketName);

const uploadImage = async (filePath, destination) => {
	try {
		await bucket.upload(filePath, {
			destination,
			public: true, // Make the file public if needed
			metadata: {
				cacheControl: 'public, max-age=31536000',
			},
		});
		console.log(`File uploaded to ${destination}`);
	} catch (error) {
		console.error('Error uploading file:', error);
		throw error;
	}
};

const getPublicUrl = (fileName) => {
	return `https://storage.googleapis.com/${bucketName}/profilePic/${fileName}`;
};

module.exports = { uploadImage, getPublicUrl };
