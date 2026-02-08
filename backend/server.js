require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const { execSync } = require('child_process');
const db = require('./database');
const spotifyRoutes = require('./routes/spotify');
const userRoutes = require('./routes/users');
const predictionRoutes = require('./routes/predictions');
const adminRoutes = require('./routes/admin');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();
let PORT = parseInt(process.env.PORT) || 5000;

// Kill any existing process on the desired port (Windows)
try {
  const result = execSync(`netstat -ano | findstr :${PORT}`, { encoding: 'utf8' }).trim();
  if (result) {
    const pid = result.split(/\s+/).pop();
    if (pid && pid !== '0') {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
        console.log(`Killed previous process on port ${PORT}`);
      } catch (e) {
        // Process might have already been killed
      }
    }
  }
} catch (e) {
  // netstat might not find anything (port is free)
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Routes
app.use('/api/spotify', spotifyRoutes);
app.use('/api/users', userRoutes);
app.use('/api/predictions', predictionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Start server with fallback ports
const server = app.listen(PORT, () => {
  console.log(`\n✅ Server running on http://localhost:${PORT}`);
  console.log(`🎤 Bad Bunny Setlist Predictor ready!\n`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    PORT = parseInt(PORT) + 1;
    console.log(`Port ${PORT - 1} in use, trying ${PORT}...`);
    server.listen(PORT);
  }
});

module.exports = app;
