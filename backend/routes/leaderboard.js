const express = require('express');
const db = require('../database');
const router = express.Router();

// Get leaderboard
router.get('/', (req, res) => {
  db.all(
    'SELECT firstName, lastName, score FROM leaderboard ORDER BY score DESC LIMIT 100',
    (err, scores) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch leaderboard' });
      }
      res.json({ leaderboard: scores || [] });
    }
  );
});

module.exports = router;
