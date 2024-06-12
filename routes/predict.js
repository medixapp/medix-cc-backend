const express = require('express');
const predict = express.Router();
const multer = require('multer');
const { embeddingPredict, oneHotPredict, getALLPredict, getPredictByResult } = require('../controllers/modelHandler');

const upload = multer();

// Model Testing
predict.post('/predict/embedding', upload.none(), embeddingPredict);
predict.post('/predict/onehot', upload.none(), oneHotPredict);
predict.get('/predict', getALLPredict);
predict.get('/predict/:result', getPredictByResult);

module.exports = predict;
