const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: 'testing-medix',
	databaseId: 'articledb',
});

async function storeArticle(id, newArticle) {
	const predictCollection = db.collection('article');
	return predictCollection.doc(id).set(newArticle);
}

module.exports = { storeArticle, db };
