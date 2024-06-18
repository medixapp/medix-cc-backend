const express = require('express');
const auth = express.Router();
const { register, login, logout } = require('../controllers/authHandler');
const { getProfile, upload, updateProfile } = require('../controllers/userHandler');
const isAuthenticated = require('../middleware/auth');

auth.post('/register', register);
auth.post('/login', login);
auth.post('/logout', logout);
auth.get('/profile', isAuthenticated, getProfile);
auth.post('/profile/update', isAuthenticated, upload.single('profileImage'), updateProfile);

module.exports = auth;
