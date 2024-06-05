const express = require('express');
const router = express.Router();
const { register, login, logout, getAllUserRegister } = require('../controllers/authHandler');
const { diseasePredictDevin, diseasePredictDesika, getALLPredict } = require('../controllers/modelHandler');

const { getProfile } = require('../controllers/userHandler');
const { isAuthenticated } = require('../middleware/auth');
const multer = require('multer');

const upload = multer();

// Auth route
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', isAuthenticated, getProfile);

router.get('/register', getAllUserRegister);

// Model Testing
router.post('/predict/devin', upload.none(), diseasePredictDevin);
router.post('/predict/desika', upload.none(), diseasePredictDesika);
router.get('/predict', getALLPredict);

module.exports = router;
