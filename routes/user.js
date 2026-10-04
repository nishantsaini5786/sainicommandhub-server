const express = require('express');
const User = require('../models/user');
const Tool = require('../models/tool');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.get('/me', protect, async (req, res) => {
  const user = await User.findById(req.user._id).populate('favorites', 'name slug category icon shortDesc').populate('toolsViewed', 'name slug category icon');
  res.json({ success: true, user: { id: user._id, fullName: user.fullName, username: user.username, email: user.email, country: user.country, role: user.role, experienceLevel: user.experienceLevel, createdAt: user.createdAt, lastLogin: user.lastLogin, favorites: user.favorites, toolsViewed: user.toolsViewed, stats: { favoritesCount: user.favorites.length, viewedCount: user.toolsViewed.length } } });
});
router.post('/favorites/:toolId', protect, async (req, res) => {
  try {
    const tool = await Tool.findById(req.params.toolId);
    if (!tool) return res.status(404).json({ success: false, message: 'Tool not found' });
    const user = await User.findById(req.user._id);
    const idx = user.favorites.findIndex((id) => id.toString() === tool._id.toString());
    let action;
    if (idx > -1) { user.favorites.splice(idx, 1); action = 'removed'; } else { user.favorites.push(tool._id); action = 'added'; }
    await user.save({ validateBeforeSave: false });
    res.json({ success: true, action, favorites: user.favorites });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
router.get('/favorites', protect, async (req, res) => {
  const user = await User.findById(req.user._id).populate('favorites');
  res.json({ success: true, favorites: user.favorites });
});
module.exports = router;
