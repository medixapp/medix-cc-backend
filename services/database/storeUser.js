const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: process.env.PROJECT_ID,
	databaseId: 'medixdb',
	keyFilename: process.env.FIRESTORE,
});

async function storeData(id, addUser) {
	const predictCollection = db.collection('users');
	return predictCollection.doc(id).set(addUser);
}

const usersCollection = db.collection('users');

module.exports = { storeData, db, usersCollection };
