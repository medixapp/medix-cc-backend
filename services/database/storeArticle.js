const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: process.env.PROJECT_ID,
	databaseId: 'medixdb',
	keyFilename: process.env.FIRESTORE,
});

async function storeArticle(id, newArticle) {
	const predictCollection = db.collection('article');
	return predictCollection.doc(id).set(newArticle);
}

module.exports = { storeArticle, db };
