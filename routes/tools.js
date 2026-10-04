const express = require('express');
const Tool = require('../models/tool');
const { protect } = require('../middleware/auth');
const router = express.Router();
router.get('/', protect, async (req, res) => {
  try {
    const { category, search, difficulty } = req.query;
    const query = {};
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } }, { shortDesc: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } }, { keywords: { $regex: search, $options: 'i' } },
        { 'commands.command': { $regex: search, $options: 'i' } },
      ];
    }
    const tools = await Tool.find(query).sort({ name: 1 });
    res.json({ success: true, count: tools.length, tools });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
router.get('/categories', protect, async (req, res) => {
  try {
    const categories = await Tool.aggregate([{ $group: { _id: '$category', count: { $sum: 1 } } }, { $sort: { _id: 1 } }]);
    res.json({ success: true, categories });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
router.get('/:slug', protect, async (req, res) => {
  try {
    const tool = await Tool.findOne({ slug: req.params.slug });
    if (!tool) return res.status(404).json({ success: false, message: 'Tool not found' });
    if (!req.user.toolsViewed.includes(tool._id)) { req.user.toolsViewed.push(tool._id); await req.user.save({ validateBeforeSave: false }); }
    res.json({ success: true, tool });
  } catch (err) { res.status(500).json({ success: false, message: 'Server error' }); }
});
module.exports = router;
