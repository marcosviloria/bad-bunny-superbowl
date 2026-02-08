const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'superbowl.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.serialize(() => {
    // Users table
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        password TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // User predictions (setlist)
    db.run(`
      CREATE TABLE IF NOT EXISTS predictions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        songId TEXT NOT NULL,
        songName TEXT NOT NULL,
        artist TEXT,
        albumCover TEXT,
        position INTEGER,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

    // Correct setlist (for owner to mark)
    db.run(`
      CREATE TABLE IF NOT EXISTS correctSetlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        songId TEXT NOT NULL,
        songName TEXT NOT NULL,
        artist TEXT,
        albumCover TEXT,
        position INTEGER,
        markedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Leaderboard (cached scores)
    db.run(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
      )
    `);

        // Settings (admin controls)
    db.run(`
      CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        predictions_open INTEGER DEFAULT 1
      )
    `);

    // Initialize settings if empty
    db.get('SELECT id FROM settings WHERE id = 1', (err, row) => {
      if (!row) {
        db.run('INSERT INTO settings (id, predictions_open) VALUES (1, 1)');
      }
    });

    console.log('Database tables initialized');
  });
}

module.exports = db;

