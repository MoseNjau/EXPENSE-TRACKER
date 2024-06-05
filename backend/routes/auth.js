const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, authMiddleware } = require('../controllers/auth');

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Logout
router.post('/logout', authMiddleware, logoutUser);

module.exports = router;
