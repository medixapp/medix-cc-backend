const express = require('express');
const article = express.Router();
const { addArticle, articleHandler, articleHandlerbyid, deleteArticle } = require('../controllers/articleHandler');

//article
article.post('/article', addArticle);
article.get('/article', articleHandler);
article.get('/article/:id', articleHandlerbyid);
article.delete('/article/:id', deleteArticle);

module.exports = article;
