const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'BookletZERO API',
    description: 'BookletZERO API',
    license: {
        name : 'MIT',
        url : 'https://opensource.org/licenses/MIT'
      }
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: ['http']
};

const outputFile = './swagger-output.json';

// API Documentation Files
const recordFiles = ['./routes/record.js'];
const landingFiles = ['./routes/landing.js'];

// const endpointsFiles = ['./endpoints.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, [
  recordFiles, 
  landingFiles
], doc);