const express = require('express');
const auth = express.Router();
const { register, login, logout, getAllUserRegister } = require('../controllers/authHandler');
const { getProfile, upload, updateProfile } = require('../controllers/userHandler');
const { isAuthenticated } = require('../middleware/auth');

// Auth route
auth.post('/register', register);
auth.post('/login', login);
auth.post('/logout', logout);
auth.get('/profile', isAuthenticated, getProfile);

// profile page route
router.post('/profile', isAuthenticated, upload.single('profileImage'), updateProfile);

// for testing only
auth.get('/register', getAllUserRegister);

module.exports = auth;
