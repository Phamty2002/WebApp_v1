const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Login API',
      version: '1.0.0',
      description: 'API for user authentication',
    },
  },
  // Define the API endpoints in the 'apis' array below.
  apis: ['./src/routes/auth.js'], // Path to your route files.
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;