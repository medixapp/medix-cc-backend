const express = require('express');
const router = express.Router();
const { register, getAllUserRegister, login, getAllUserLogin, diseasePredictHandler } = require('./handler');

router.post('/register', register);
router.get('/register', getAllUserRegister);
router.post('/predict', diseasePredictHandler);

router.post('/login', login);
router.get('/login', getAllUserLogin);

module.exports = router;
