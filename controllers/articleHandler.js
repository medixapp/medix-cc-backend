const article = require('../data/article');
let currentId = article.length > 0 ? Math.max(...article.map((a) => a.id)) : 0;

const addArticle = async (req, res) => {
	const { title, image, content } = req.body;
	const id = ++currentId;
	const createdAt = new Date().toISOString();

	const newArticle = {
		id,
		title,
		image,
		content,
		createdAt,
	};

	article.push(newArticle);

	const isSuccess = article.some((articles) => articles.id === id);
	if (isSuccess) {
		res.status(200).json({
			status: 'success',
			message: 'Article Berhasil Ditambah',
			data: {
				id: id,
			},
		});
	} else {
		res.status(404).json({
			status: 'fail',
			message: 'User registration failed',
		});
	}
};

const articleHandler = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: article,
	});
};

const articleHandlerbyid = (req, res) => {
	const { id } = req.params;
	const articleById = article.find((n) => n.id == id);

	if (articleById) {
		res.json({
			status: 'success',
			data: {
				article: articleById,
			},
		});
	} else {
		res.status(404).json({
			status: 'fail',
			message: 'Article Tidak ditemukan',
		});
	}
};

const deleteArticle = async (req, res) => {
	const { id } = req.params;
	const index = article.findIndex((a) => a.id == id);

	if (index !== -1) {
		article.splice(index, 1);
		res.status(200).json({
			status: 'success',
			message: 'Article Berhasil Dihapus',
		});
	} else {
		res.status(404).json({
			status: 'fail',
			message: 'Article Tidak ditemukan',
		});
	}
};
module.exports = { addArticle, articleHandler, articleHandlerbyid, deleteArticle };
