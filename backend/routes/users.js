const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../database');
const router = express.Router();

// Sign up
router.post('/signup', (req, res) => {
  const { firstName, lastName, password } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First and last name required' });
  }

  let hashedPassword = null;
  if (password) {
    hashedPassword = bcrypt.hashSync(password, 10);
  }

  db.run(
    'INSERT INTO users (firstName, lastName, password) VALUES (?, ?, ?)',
    [firstName, lastName, hashedPassword],
    function(err) {
      if (err) {
        console.error('Signup error:', err);
        return res.status(500).json({ error: 'Failed to create user' });
      }

      req.session.userId = this.lastID;
      res.json({ 
        userId: this.lastID, 
        firstName, 
        lastName,
        message: 'User created successfully'
      });
    }
  );
});

// Sign in
router.post('/signin', (req, res) => {
  const { firstName, lastName, password } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({ error: 'First and last name required' });
  }

  db.get(
    'SELECT * FROM users WHERE firstName = ? AND lastName = ?',
    [firstName, lastName],
    (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Check password if one is set
      if (user.password) {
        if (!password || !bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ error: 'Incorrect password' });
        }
      }

      req.session.userId = user.id;
      res.json({ 
        userId: user.id, 
        firstName: user.firstName, 
        lastName: user.lastName,
        message: 'Signed in successfully'
      });
    }
  );
});

// Get current user
router.get('/current', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  db.get(
    'SELECT id, firstName, lastName FROM users WHERE id = ?',
    [req.session.userId],
    (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: 'User not found' });
      }
      res.json(user);
    }
  );
});

// Sign out
router.post('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to sign out' });
    }
    res.json({ message: 'Signed out successfully' });
  });
});

module.exports = router;
