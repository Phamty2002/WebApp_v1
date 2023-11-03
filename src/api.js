const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const authRoutes = require('./routes/auth'); // Import your auth routes

const app = express();

app.use(bodyParser.json());

// Configure your MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'Robertoty2002@', // Replace with your MySQL password
  database: 'FoodWeb', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Configure routes
app.use('/api/auth', authRoutes(db)); // Use the auth routes with the MySQL connection

// Add the app.listen method to start the server
const port = 3000; // Specify the port you want to listen on
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
