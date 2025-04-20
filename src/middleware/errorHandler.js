/**
 * Global error handler middleware
 * Formats errors according to FHIR OperationOutcome resource
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Default to 500 internal server error
  const statusCode = err.statusCode || 500;
  
  // Format response according to FHIR OperationOutcome
  const response = {
    resourceType: 'OperationOutcome',
    issue: [
      {
        severity: 'error',
        code: err.code || 'processing',
        details: {
          text: err.message || 'An unexpected error occurred'
        }
      }
    ]
  };

  res.status(statusCode).json(response);
};

module.exports = errorHandler;