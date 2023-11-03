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
  apis: ['./routes/auth'], // Path to your API route file
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
