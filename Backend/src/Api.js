const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const loginRoutes = require('./routes/login'); // Import your auth routes
const signupRoutes = require('./routes/signup');
const swaggerSpec = require('./swagger'); // Import your Swagger specification
const swaggerUi = require('swagger-ui-express'); // Import swagger-ui-express
const app = express();

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());

const cors = require('cors');

// Configure your MySQL connection
const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'robertoty', // Replace with your MySQL username
  password: 'Robertoty2002', // Replace with your MySQL password
  database: 'foodweb', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL_Database:', err);
  } else {
    console.log('Connected to MySQL_Database');
  }
});

// Configure routes
app.use('/api/login', loginRoutes(db)); // Use the auth routes with the MySQL connection
app.use('/api/signup', signupRoutes(db));

// Add the app.listen method to start the server
const port = 3001; // Specify the port you want to listen on
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
