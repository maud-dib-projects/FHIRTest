const express = require('express');
const router = express.Router();
const observations = require('../data/observations');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

// Get all observations or filter by patient and/or category
router.get('/', (req, res) => {
  let filteredObservations = [...observations];
  
  // Filter by patient if specified
  if (req.query.patient) {
    const patientReference = `Patient/${req.query.patient}`;
    filteredObservations = filteredObservations.filter(obs => 
      obs.subject.reference === patientReference);
  }
  
  // Filter by category if specified (laboratory or survey/assessment)
  if (req.query.category) {
    // Convert query parameter to expected coding value
    const categoryMap = {
      'laboratory': 'laboratory',
      'lab': 'laboratory',
      'labs': 'laboratory',
      'assessment': 'survey',
      'assessments': 'survey',
      'survey': 'survey'
    };
    
    const categoryCode = categoryMap[req.query.category.toLowerCase()];
    
    if (categoryCode) {
      filteredObservations = filteredObservations.filter(obs => 
        obs.category.some(cat => 
          cat.coding.some(coding => coding.code === categoryCode)
        )
      );
    }
  }
  
  res.json(createBundle(filteredObservations, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
});

// Get a specific observation by ID
router.get('/:id', (req, res) => {
  const observation = observations.find(o => o.id === req.params.id);
  
  if (!observation) {
    return res.status(404).json(createOperationOutcome(
      `Observation with ID ${req.params.id} not found`,
      'error',
      'not-found'
    ));
  }
  
  res.json(observation);
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