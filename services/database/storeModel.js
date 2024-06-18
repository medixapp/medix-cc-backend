const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: 'medix-backend-production',
	databaseId: 'modeldb',
});

async function storeModel(id, data) {
	const predictCollection = db.collection('hasil');
	return predictCollection.doc(id).set(data);
}

module.exports = { storeModel, db };
