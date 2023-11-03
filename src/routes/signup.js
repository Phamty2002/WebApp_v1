const express = require('express');

/**
 * @swagger
 * /api/signup/signup:
 *   post:
 *     summary: Sign Up and Register a new user.
 *     description: Register a new user with a unique username, password and email.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: User registration information (username, password, email).
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *             email:
 *               type: string
 *     responses:
 *       '201':
 *         description: User successfully registered.
 *       '400':
 *         description: Bad request. Missing or invalid parameters.
 *       '409':
 *         description: Username or email already in use.
 *       '500':
 *         description: Error registering the user.
 */
module.exports = (db) => {
  const router = express.Router();

  router.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    // Check if the provided parameters are valid and not missing
    if (!username || !password || !email) {
      res.status(400).json({ message: 'Bad request. Missing or invalid parameters.' });
      return;
    }

    // Check if the username or email is already in use
    db.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (err, rows) => {
      if (err) {
        console.error('Error checking username and email availability:', err);
        res.status(500).json({ message: 'Error registering the user.' });
      } else if (rows.length > 0) {
        // Check if username or email is already in use
        const user = rows[0];
        if (user.username === username) {
          res.status(409).json({ message: 'Username already in use.' });
        } else {
          res.status(409).json({ message: 'Email already in use.' });
        }
      } else {
        // Register the user
        db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, password, email], (err, result) => {
          if (err) {
            console.error('Error registering the user:', err);
            res.status(500).json({ message: 'Error registering the user.' });
          } else {
            res.status(201).json({ message: 'User successfully registered.' });
          }
        });
      }
    });
  });

  return router;
};
