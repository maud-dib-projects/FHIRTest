const express = require('express');
const router = express.Router();
const coverages = require('../data/coverages');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

// Get all coverages or filter by patient
router.get('/', (req, res) => {
  // Filter by patient (beneficiary) if specified
  if (req.query.patient || req.query.beneficiary) {
    const patientId = req.query.patient || req.query.beneficiary;
    const patientReference = `Patient/${patientId}`;
    const filtered = coverages.filter(cov => 
      cov.beneficiary.reference === patientReference);
    
    return res.json(createBundle(filtered, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
  }
  
  res.json(createBundle(coverages, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
});

// Get a specific coverage by ID
router.get('/:id', (req, res) => {
  const coverage = coverages.find(c => c.id === req.params.id);
  
  if (!coverage) {
    return res.status(404).json(createOperationOutcome(
      `Coverage with ID ${req.params.id} not found`,
      'error',
      'not-found'
    ));
  }
  
  res.json(coverage);
});

// Catch-all for unsupported methods
router.all('*', (req, res) => {
  res.status(405).json(createOperationOutcome(
    `Method ${req.method} not allowed`,
    'error',
    'not-supported'
  ));
});

module.exports = router;