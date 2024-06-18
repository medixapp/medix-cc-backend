const express = require('express');
const article = express.Router();
const { addArticle, getArticle, getArticlebyid, deleteArticle } = require('../controllers/articleHandler');

article.post('/article', addArticle);
article.get('/article', getArticle);
article.get('/article/:id', getArticlebyid);
article.delete('/article/:id', deleteArticle);

module.exports = article;
