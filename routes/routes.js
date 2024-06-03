const express = require('express');
const router = express.Router();
const { register, login, logout, getAllUserRegister } = require('../controllers/authHandler');
const { getProfile } = require('../controllers/userHandler');
const { isAuthenticated } = require('../middleware/auth');

// diseasePredictHandler
// router.post('/predict', diseasePredictHandler);

// Auth route
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', isAuthenticated, getProfile);

//testing
router.get('/register', getAllUserRegister)

module.exports = router;
