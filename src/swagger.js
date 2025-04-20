const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FHIR Demo API',
      version: '1.0.0',
      description: 'A FHIR-compliant API for testing frontend applications',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: '/api/v1',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        OperationOutcome: {
          type: 'object',
          properties: {
            resourceType: { type: 'string', example: 'OperationOutcome' },
            issue: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  severity: { type: 'string', example: 'error' },
                  code: { type: 'string', example: 'not-found' },
                  details: {
                    type: 'object',
                    properties: {
                      text: { type: 'string', example: 'Resource not found' }
                    }
                  }
                }
              }
            }
          }
        },
        Bundle: {
          type: 'object',
          properties: {
            resourceType: { type: 'string', example: 'Bundle' },
            type: { type: 'string', example: 'searchset' },
            total: { type: 'integer', example: 1 },
            link: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  relation: { type: 'string', example: 'self' },
                  url: { type: 'string', example: 'http://example.org/fhir/Patient' }
                }
              }
            },
            entry: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  fullUrl: { type: 'string', example: 'http://example.org/fhir/Patient/1' },
                  resource: { type: 'object' }
                }
              }
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js'], // Path to the API routes
};

const specs = swaggerJsDoc(options);

module.exports = specs; 