const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: [ './api/server/routes/*.js', './api/server/src/models/*.js' ],
  basePath: '/',
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      description: 'Collo API',
      swagger: '2.0',
      title: 'Collo API',
      version: '1.0.0',
    },
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        description: 'JWT authorization of an API',
        name: 'authorization',
        in: 'header'
      }
    }
  },
};

const specs = swaggerJsdoc(options);
export default specs;
