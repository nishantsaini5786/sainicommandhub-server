const express = require('express');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const User = require('../models/user');
const { registerValidation } = require('../middleware/validate');
const router = express.Router();
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { success: false, message: 'Too many attempts' } });
const signToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

router.post('/register', authLimiter, registerValidation, async (req, res) => {
  try {
    const { fullName, username, email, password, country, role, experienceLevel, acceptedTerms } = req.body;
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) return res.status(409).json({ success: false, message: `${existing.email === email ? 'Email' : 'Username'} already registered` });
    const user = await User.create({ fullName, username, email, password, country, role: role || 'student', experienceLevel: experienceLevel || 'beginner', acceptedTerms: acceptedTerms === 'true' || acceptedTerms === true });
    const token = signToken(user._id);
    res.status(201).json({ success: true, message: 'Account created', token, user: { id: user._id, fullName: user.fullName, username: user.username, email: user.email, country: user.country, role: user.role, experienceLevel: user.experienceLevel, createdAt: user.createdAt } });
  } catch (err) { console.error(err); res.status(500).json({ success: false, message: 'Server error' }); }
});

router.post('/login', authLimiter, async (req, res) => {
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) return res.status(400).json({ success: false, message: 'All fields required' });
    const user = await User.findOne({ $or: [{ email: identifier.toLowerCase() }, { username: identifier.toLowerCase() }] }).select('+password');
    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });
    if (user.isLocked && user.isLocked()) return res.status(423).json({ success: false, message: 'Account locked' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) { await user.incrementLoginAttempts(); return res.status(401).json({ success: false, message: 'Invalid credentials' }); }
    user.loginAttempts = 0; user.lockUntil = undefined; user.lastLogin = new Date();
    await user.save({ validateBeforeSave: false });
    const token = signToken(user._id);
    res.json({ success: true, message: 'Login successful', token, user: { id: user._id, fullName: user.fullName, username: user.username, email: user.email, country: user.country, role: user.role, experienceLevel: user.experienceLevel, lastLogin: user.lastLogin } });
  } catch (err) { console.error(err); res.status(500).json({ success: false, message: 'Server error' }); }
});
module.exports = router;
