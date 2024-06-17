const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
	projectId: 'testing-medix',
	keyFilename: './serviceAccountKey.json',
});

const bucketName = 'medix-bucket';
const bucket = storage.bucket(bucketName);

const uploadImage = async (buffer, destination) => {
	try {
		const file = bucket.file(destination);

		const stream = file.createWriteStream({
			metadata: {
				contentType: 'image/jpeg', // or the appropriate content type
			},
			public: true, // Make the file public if needed
			resumable: false,
		});

		stream.on('error', (err) => {
			console.error('Error uploading file:', err);
			throw err;
		});

		stream.on('finish', () => {
			console.log(`File uploaded to ${destination}`);
		});

		stream.end(buffer);
	} catch (error) {
		console.error('Error uploading file:', error);
		throw error;
	}
};

const getPublicUrl = (fileName) => {
	return `https://storage.googleapis.com/${bucketName}/${fileName}`;
};

module.exports = { uploadImage, getPublicUrl };
