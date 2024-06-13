const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: 'testing-medix',
	databaseId: 'userdb',
});

async function storeData(id, addUser) {
	const predictCollection = db.collection('users');
	return predictCollection.doc(id).set(addUser);
}

const usersCollection = db.collection('users');

module.exports = { storeData, db, usersCollection };
