require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

// Import routes
const patientRoutes = require('./routes/patientRoutes');
const medicationDispenseRoutes = require('./routes/medicationDispenseRoutes');
const observationRoutes = require('./routes/observationRoutes');
const coverageRoutes = require('./routes/coverageRoutes');
const organizationRoutes = require('./routes/organizationRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Apply middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: false,
  crossOriginResourcePolicy: false
}));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Root route to serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Patient details page route
app.get('/patient-details.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/patient-details.html'));
});

// API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, { 
  explorer: true,
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.7.0/swagger-ui.min.css', 
  swaggerOptions: {
    validatorUrl: null,  // Disable validator
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API is running' });
});

// API routes
app.use('/api/v1/Patient', patientRoutes);
app.use('/api/v1/MedicationDispense', medicationDispenseRoutes);
app.use('/api/v1/Observation', observationRoutes);
app.use('/api/v1/Coverage', coverageRoutes);
app.use('/api/v1/Organization', organizationRoutes);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: `Cannot ${req.method} ${req.url}`,
    resourceType: 'OperationOutcome',
    issue: [
      {
        severity: 'error',
        code: 'not-found',
        details: {
          text: 'The requested resource was not found'
        }
      }
    ]
  });
});

// Apply global error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`FHIR Demo API running on port ${PORT}`);
});