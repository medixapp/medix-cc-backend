const { storeArticle, db } = require('../services/database/storeArticle');

const getCurrentId = async () => {
	const articlesSnapshot = await db.collection('article').orderBy('id', 'desc').limit(1).get();
	if (articlesSnapshot.empty) {
		return 0;
	}
	const article = articlesSnapshot.docs[0].data();
	return article.id;
};

const addArticle = async (req, res) => {
	try {
		const { title, image, content } = req.body;
		let currentId = await getCurrentId();
		const id = ++currentId;
		const createdAt = new Date().toISOString();

		const newArticle = {
			id,
			title,
			image,
			content,
			createdAt,
		};

		await storeArticle(String(id), newArticle);

		res.status(200).json({
			status: 'success',
			message: 'Article Berhasil Ditambah',
			data: {
				id: id,
			},
		});
	} catch (error) {
		console.error('Error adding article:', error);
		res.status(500).json({
			status: 'fail',
			message: 'Article gagal ditambahkan',
		});
	}
};

const articleHandler = async (req, res) => {
	try {
		const articlesSnapshot = await db.collection('article').get();
		const articles = articlesSnapshot.docs.map((doc) => doc.data());

		res.status(200).json({
			status: 'success',
			data: articles,
		});
	} catch (error) {
		console.error('Error fetching articles:', error);
		res.status(500).json({
			status: 'fail',
			message: 'Gagal mengambil artikel',
		});
	}
};

const articleHandlerbyid = async (req, res) => {
	try {
		const { id } = req.params;
		const articleDoc = await db.collection('article').doc(id).get();

		if (!articleDoc.exists) {
			res.status(404).json({
				status: 'fail',
				message: 'Article Tidak ditemukan',
			});
		} else {
			res.status(200).json({
				status: 'success',
				data: {
					article: articleDoc.data(),
				},
			});
		}
	} catch (error) {
		console.error('Error fetching article by ID:', error);
		res.status(500).json({
			status: 'fail',
			message: 'Gagal mengambil artikel',
		});
	}
};

const deleteArticle = async (req, res) => {
	try {
		const { id } = req.params;
		const articleDoc = await db.collection('article').doc(id).get();

		if (!articleDoc.exists) {
			res.status(404).json({
				status: 'fail',
				message: 'Article Tidak ditemukan',
			});
		} else {
			await db.collection('article').doc(id).delete();
			res.status(200).json({
				status: 'success',
				message: 'Article Berhasil Dihapus',
			});
		}
	} catch (error) {
		console.error('Error deleting article:', error);
		res.status(500).json({
			status: 'fail',
			message: 'Gagal menghapus artikel',
		});
	}
};

module.exports = { addArticle, articleHandler, articleHandlerbyid, deleteArticle };
