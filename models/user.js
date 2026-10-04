const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, lowercase: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  country: { type: String, required: true },
  role: { type: String, default: 'student' },
  experienceLevel: { type: String, default: 'beginner' },
  lastLogin: { type: Date, default: null },
  loginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Date, default: null },
  isActive: { type: Boolean, default: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tool' }],
  toolsViewed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tool' }],
  acceptedTerms: { type: Boolean, required: true },
  acceptedTermsAt: { type: Date, default: Date.now },
}, { timestamps: true });
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.comparePassword = async function (c) { return bcrypt.compare(c, this.password); };
userSchema.methods.isLocked = function () { return !!(this.lockUntil && this.lockUntil > Date.now()); };
userSchema.methods.incrementLoginAttempts = async function () {
  const MAX = 5, LOCK = 15 * 60 * 1000;
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({ $set: { loginAttempts: 1 }, $unset: { lockUntil: 1 } });
  }
  const updates = { $inc: { loginAttempts: 1 } };
  if (this.loginAttempts + 1 >= MAX && !this.isLocked()) updates.$set = { lockUntil: Date.now() + LOCK };
  return this.updateOne(updates);
};
module.exports = mongoose.model('User', userSchema);
