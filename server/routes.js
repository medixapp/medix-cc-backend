const express = require('express');
const router = express.Router();
const {
	addUserRegister,
	getAllUsers,
	login,
	getAllUserLogin,
} = require('./handler');

router.post('/register', addUserRegister);
router.get('/register', getAllUsers);

router.post('/login', login);
router.get('/login', getAllUserLogin);

module.exports = router;
