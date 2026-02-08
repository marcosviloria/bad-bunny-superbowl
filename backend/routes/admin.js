const express = require('express');
const db = require('../database');
const router = express.Router();

// Verify owner password
function verifyOwner(req, res, next) {
  const { ownerPassword } = req.body;
  if (ownerPassword !== process.env.OWNER_PASSWORD) {
    return res.status(401).json({ error: 'Invalid owner password' });
  }
  next();
}

// Get correct setlist
router.get('/correct-setlist', (req, res) => {
  db.all(
    'SELECT * FROM correctSetlist ORDER BY position ASC',
    (err, songs) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch correct setlist' });
      }
      res.json({ songs: songs || [] });
    }
  );
});

// Add to correct setlist (owner only)
router.post('/add-correct-song', verifyOwner, (req, res) => {
  const { songId, songName, artist, albumCover } = req.body;

  if (!songId || !songName) {
    return res.status(400).json({ error: 'Song ID and name required' });
  }

  // Check if already added
  db.get(
    'SELECT id FROM correctSetlist WHERE songId = ?',
    [songId],
    (err, existing) => {
      if (existing) {
        return res.status(400).json({ error: 'Song already marked as correct' });
      }

      db.get(
        'SELECT COUNT(*) as count FROM correctSetlist',
        (err, result) => {
          const position = result.count + 1;
          db.run(
            'INSERT INTO correctSetlist (songId, songName, artist, albumCover, position) VALUES (?, ?, ?, ?, ?)',
            [songId, songName, artist, albumCover, position],
            function(err) {
              if (err) {
                return res.status(500).json({ error: 'Failed to add correct song' });
              }

              // Update leaderboard
              updateLeaderboard();

              res.json({ 
                id: this.lastID,
                message: 'Song marked as correct, leaderboard updated'
              });
            }
          );
        }
      );
    }
  );
});

// Remove from correct setlist (owner only)
router.delete('/remove-correct-song/:songId', verifyOwner, (req, res) => {
  const { songId } = req.params;

  db.run(
    'DELETE FROM correctSetlist WHERE songId = ?',
    [songId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to remove song' });
      }

      // Update leaderboard
      updateLeaderboard();

      res.json({ message: 'Song removed from correct setlist' });
    }
  );
});

// Get all users (owner only)
router.post('/get-users', verifyOwner, (req, res) => {
  db.all(
    'SELECT id, firstName, lastName FROM users ORDER BY firstName ASC',
    (err, users) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch users' });
      }
      res.json({ users: users || [] });
    }
  );
});

// Delete user (owner only)
router.post('/delete-user', verifyOwner, (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID required' });
  }

  // First, delete user's predictions
  db.run(
    'DELETE FROM predictions WHERE userId = ?',
    [userId],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete user predictions' });
      }

      // Then delete the user
      db.run(
        'DELETE FROM users WHERE id = ?',
        [userId],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Failed to delete user' });
          }

          if (this.changes === 0) {
            return res.status(404).json({ error: 'User not found' });
          }

          // Update leaderboard
          updateLeaderboard();

          res.json({ message: 'User deleted successfully' });
        }
      );
    }
  );
});

// Update leaderboard scores
function updateLeaderboard() {
  db.serialize(() => {
    // Clear existing leaderboard
    db.run('DELETE FROM leaderboard');

    // Get all users
    db.all('SELECT DISTINCT id, firstName, lastName FROM users', (err, users) => {
      if (err || !users) return;

      users.forEach(user => {
        // Count matches between user predictions and correct songs
        db.get(
          `SELECT COUNT(*) as score FROM predictions p 
           INNER JOIN correctSetlist c ON p.songId = c.songId 
           WHERE p.userId = ?`,
          [user.id],
          (err, result) => {
            const score = result?.score || 0;
            db.run(
              'INSERT INTO leaderboard (userId, firstName, lastName, score) VALUES (?, ?, ?, ?)',
              [user.id, user.firstName, user.lastName, score]
            );
          }
        );
      });
    });
  });
}

// Toggle predictions open/closed (owner only)
router.post('/toggle-predictions', verifyOwner, (req, res) => {
  // Get current state and toggle it
  db.get('SELECT predictions_open FROM settings WHERE id = 1', (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to toggle predictions' });
    }
    
    const newState = row ? !row.predictions_open : 1;
    db.run(
      'UPDATE settings SET predictions_open = ? WHERE id = 1',
      [newState ? 1 : 0],
      (err) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to toggle predictions' });
        }
        res.json({ predictionsOpen: Boolean(newState), message: newState ? 'Predictions opened' : 'Predictions closed' });
      }
    );
  });
});

// Get predictions status (owner only)
router.post('/get-predictions-status', verifyOwner, (req, res) => {
  db.get('SELECT predictions_open FROM settings WHERE id = 1', (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get status' });
    }
    res.json({ predictionsOpen: row ? Boolean(row.predictions_open) : true });
  });
});

module.exports = router;

