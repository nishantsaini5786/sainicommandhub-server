const jwt = require('jsonwebtoken');
const User = require('../models/user');
const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return res.status(401).json({ success: false, message: 'Not authorized', code: 'NO_TOKEN' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user || !user.isActive) return res.status(401).json({ success: false, message: 'User invalid', code: 'USER_INVALID' });
    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') return res.status(401).json({ success: false, message: 'Invalid token', code: 'INVALID_TOKEN' });
    if (err.name === 'TokenExpiredError') return res.status(401).json({ success: false, message: 'Token expired', code: 'TOKEN_EXPIRED' });
    return res.status(500).json({ success: false, message: 'Auth error' });
  }
};
module.exports = { protect };
