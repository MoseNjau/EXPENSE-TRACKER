const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { blacklistToken, isTokenBlacklisted } = require('../utils/tokenBlacklist');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({ username, email, password });
        await user.save();
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'your_jwt_secret', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const payload = { user: { id: user.id } };
        jwt.sign(payload, 'your_jwt_secret', { expiresIn: 3600 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        res.status(500).send('Server error');
    }
};

exports.logoutUser = (req, res) => {
    const token = req.header('x-auth-token');
    if (token) {
        blacklistToken(token);
        res.json({ msg: 'Logged out successfully' });
    } else {
        res.status(400).json({ msg: 'No token provided' });
    }
};

exports.authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    isTokenBlacklisted(token, (err, blacklisted) => {
        if (err) return res.status(500).json({ msg: 'Server error' });
        if (blacklisted) return res.status(401).json({ msg: 'Token is not valid' });

        try {
            const decoded = jwt.verify(token, 'your_jwt_secret');
            req.user = decoded.user;
            next();
        } catch (err) {
            res.status(401).json({ msg: 'Token is not valid' });
        }
    });
};
