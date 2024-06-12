const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, addUser) {
	const db = new Firestore({
		projectId: 'testing-medix',
		databaseId: 'userdb',
	});

	const predictCollection = db.collection('users');
	return predictCollection.doc(id).set(addUser);
}

const db = new Firestore({
	projectId: 'testing-medix',
	databaseId: 'userdb',
});

module.exports = { storeData, db };
