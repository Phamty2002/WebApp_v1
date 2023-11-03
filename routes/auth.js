const express = require('express');

module.exports = (db) => {
  const router = express.Router();

  router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check the user's credentials against the MySQL database
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, rows) => {
      if (err) {
        console.error('Error checking user credentials:', err);
        res.status(500).json({ message: 'Login failed' });
      } else if (rows.length === 0) {
        res.status(401).json({ message: 'Authentication failed' });
      } else {
        // Authentication successful
        res.status(200).json({ message: 'Login successful' });
      }
    });
  });

  return router;
};
