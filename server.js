require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./routes/auth');
const toolsRoutes = require('./routes/tools');
const userRoutes = require('./routes/user');
const Tool = require('./models/tool');
const toolsSeed = require('./data/toolsSeed');

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json({ limit: '10kb' }));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.get('/api/health', (_, res) => res.json({ status: 'OK', time: new Date() }));
app.use('/api/auth', authRoutes);
app.use('/api/tools', toolsRoutes);
app.use('/api/user', userRoutes);

app.use((req, res) => res.status(404).json({ success: false, message: 'Route not found' }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ success: false, message: err.message });
});

async function seedTools() {
  try {
    const count = await Tool.countDocuments();
    const seedCount = toolsSeed.length;

    if (count === 0 || count !== seedCount) {
      console.log(`🔄 Re-seeding tools (DB: ${count}, Seed file: ${seedCount})...`);
      await Tool.deleteMany({});
      await Tool.insertMany(toolsSeed);
      console.log(`✅ Seeded ${seedCount} tools`);
    } else {
      console.log(`✅ Tools DB already up-to-date (${count} tools)`);
    }
  } catch (err) {
    console.error('Seed error:', err.message);
  }
}

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');
    await seedTools();
    app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB error:', err.message);
    process.exit(1);
  });