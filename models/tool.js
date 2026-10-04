const mongoose = require('mongoose');
const toolSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, required: true, index: true },
  shortDesc: { type: String, required: true },
  description: { type: String, required: true },
  installation: { type: String, default: '' },
  syntax: { type: String, default: '' },
  icon: { type: String, default: '🛠️' },
  difficulty: { type: String, default: 'beginner' },
  commands: [{ title: String, command: String, explanation: String, example: String, dangerous: { type: Boolean, default: false } }],
  keywords: [String],
}, { timestamps: true });
module.exports = mongoose.model('Tool', toolSchema);
