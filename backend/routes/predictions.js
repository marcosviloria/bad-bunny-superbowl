const express = require('express');
const db = require('../database');
const router = express.Router();

// Get deadline (7:30 PM EST tonight)
function isBeforeDeadline() {
  const now = new Date();
  // Convert to EST (UTC-5)
  const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  const deadline = new Date(estTime);
  deadline.setHours(19, 30, 0, 0); // 7:30 PM EST
  return estTime < deadline;
}

// Get user's predictions
router.get('/my-predictions', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  db.all(
    'SELECT * FROM predictions WHERE userId = ? ORDER BY position ASC',
    [req.session.userId],
    (err, predictions) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch predictions' });
      }
      res.json({ predictions: predictions || [] });
    }
  );
});

// Add prediction
router.post('/add', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (!isBeforeDeadline()) {
    return res.status(403).json({ error: 'Predictions are closed' });
  }

  const { songId, songName, artist, albumCover } = req.body;

  if (!songId || !songName) {
    return res.status(400).json({ error: 'Song ID and name required' });
  }

  // Check if user already has this song
  db.get(
    'SELECT id FROM predictions WHERE userId = ? AND songId = ?',
    [req.session.userId, songId],
    (err, existing) => {
      if (existing) {
        return res.status(400).json({ error: 'Song already in your setlist' });
      }

      // Check if user already has 15 songs
      db.get(
        'SELECT COUNT(*) as count FROM predictions WHERE userId = ?',
        [req.session.userId],
        (err, result) => {
          if (result.count >= 15) {
            return res.status(400).json({ error: 'Maximum 15 songs allowed' });
          }

          const position = result.count + 1;
          db.run(
            'INSERT INTO predictions (userId, songId, songName, artist, albumCover, position) VALUES (?, ?, ?, ?, ?, ?)',
            [req.session.userId, songId, songName, artist, albumCover, position],
            function(err) {
              if (err) {
                return res.status(500).json({ error: 'Failed to add prediction' });
              }
              res.json({ 
                id: this.lastID, 
                message: 'Song added to setlist'
              });
            }
          );
        }
      );
    }
  );
});

// Remove prediction
router.delete('/remove/:predictionId', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (!isBeforeDeadline()) {
    return res.status(403).json({ error: 'Predictions are closed' });
  }

  const { predictionId } = req.params;

  db.run(
    'DELETE FROM predictions WHERE id = ? AND userId = ?',
    [predictionId, req.session.userId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to remove prediction' });
      }
      res.json({ message: 'Song removed from setlist' });
    }
  );
});

// Reorder predictions
router.put('/reorder', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  if (!isBeforeDeadline()) {
    return res.status(403).json({ error: 'Predictions are closed' });
  }

  const { orderedIds } = req.body;

  if (!Array.isArray(orderedIds)) {
    return res.status(400).json({ error: 'Invalid order' });
  }

  db.serialize(() => {
    orderedIds.forEach((id, index) => {
      db.run(
        'UPDATE predictions SET position = ? WHERE id = ? AND userId = ?',
        [index + 1, id, req.session.userId]
      );
    });

    res.json({ message: 'Setlist reordered' });
  });
});

module.exports = router;
