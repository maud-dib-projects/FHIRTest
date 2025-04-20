/**
 * Format FHIR Bundle response
 * @param {Array} resources - Array of FHIR resources
 * @param {String} type - Bundle type (searchset, collection, etc)
 * @param {String} url - Request URL
 * @returns {Object} FHIR Bundle resource
 */
const createBundle = (resources, type = 'searchset', url = '') => {
  return {
    resourceType: 'Bundle',
    type: type,
    timestamp: new Date().toISOString(),
    total: resources.length,
    link: [
      {
        relation: 'self',
        url: url
      }
    ],
    entry: resources.map(resource => ({
      resource: resource,
      fullUrl: `${url}/${resource.id}`
    }))
  };
};

/**
 * Format FHIR OperationOutcome response
 * @param {String} message - Error message
 * @param {String} severity - Error severity (error, warning, information)
 * @param {String} code - Error code
 * @returns {Object} FHIR OperationOutcome resource
 */
const createOperationOutcome = (message, severity = 'error', code = 'processing') => {
  return {
    resourceType: 'OperationOutcome',
    issue: [
      {
        severity: severity,
        code: code,
        details: {
          text: message
        }
      }
    ]
  };
};

module.exports = {
  createBundle,
  createOperationOutcome
};