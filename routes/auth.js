const express = require('express');
const auth = express.Router();
const { register, login, logout, getAllUserRegister } = require('../controllers/authHandler');
const { getProfile } = require('../controllers/userHandler');
const { isAuthenticated } = require('../middleware/auth');

// Auth route
auth.post('/register', register);
auth.post('/login', login);
auth.post('/logout', logout);
auth.get('/profile', isAuthenticated, getProfile);
auth.get('/register', getAllUserRegister);

module.exports = auth;
