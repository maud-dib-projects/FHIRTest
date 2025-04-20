const express = require('express');
const router = express.Router();
const medicationDispenses = require('../data/medicationDispenses');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

// Get all medication dispenses
router.get('/', (req, res) => {
  // Filter by patient if specified
  if (req.query.patient) {
    const patientReference = `Patient/${req.query.patient}`;
    const filtered = medicationDispenses.filter(md => 
      md.subject.reference === patientReference);
    
    return res.json(createBundle(filtered, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
  }
  
  res.json(createBundle(medicationDispenses, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
});

// Get a specific medication dispense by ID
router.get('/:id', (req, res) => {
  const medicationDispense = medicationDispenses.find(md => md.id === req.params.id);
  
  if (!medicationDispense) {
    return res.status(404).json(createOperationOutcome(
      `MedicationDispense with ID ${req.params.id} not found`,
      'error',
      'not-found'
    ));
  }
  
  res.json(medicationDispense);
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