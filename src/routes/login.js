const express = require('express');

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login and Authenticate a user.
 *     description: Authenticate a user by username and password.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: User credentials (username and password).
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       '200':
 *         description: User successfully authenticated.
 *       '401':
 *         description: Authentication failed.
 *       '500':
 *         description: Error checking user credentials.
 */
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
