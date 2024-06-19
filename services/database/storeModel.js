const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: process.env.PROJECT_ID,
	databaseId: 'modeldb',
	keyFilename: process.env.FIRESTORE,
});

async function storeModel(id, data) {
	const predictCollection = db.collection('hasil');
	return predictCollection.doc(id).set(data);
}

module.exports = { storeModel, db };
