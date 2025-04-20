const express = require('express');
const router = express.Router();
const observations = require('../data/observations');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

/**
 * @swagger
 * components:
 *   schemas:
 *     Observation:
 *       type: object
 *       required:
 *         - resourceType
 *         - id
 *         - status
 *         - subject
 *         - category
 *       properties:
 *         resourceType:
 *           type: string
 *           example: Observation
 *           description: Resource type must be "Observation"
 *         id:
 *           type: string
 *           example: observation-001
 *           description: Logical id of the resource
 *         status:
 *           type: string
 *           enum: [registered, preliminary, final, amended, corrected, cancelled, entered-in-error, unknown]
 *           example: final
 *           description: The status of the observation
 *         subject:
 *           type: object
 *           required:
 *             - reference
 *           properties:
 *             reference:
 *               type: string
 *               example: Patient/patient-001
 *               description: Reference to the patient this observation is for
 *         category:
 *           type: array
 *           description: Classification of the type of observation
 *           items:
 *             type: object
 *             properties:
 *               coding:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     system:
 *                       type: string
 *                       example: http://terminology.hl7.org/CodeSystem/observation-category
 *                     code:
 *                       type: string
 *                       example: laboratory
 *                     display:
 *                       type: string
 *                       example: Laboratory
 *         code:
 *           type: object
 *           description: Type of observation
 *           properties:
 *             coding:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   system:
 *                     type: string
 *                     example: http://loinc.org
 *                   code:
 *                     type: string
 *                     example: 718-7
 *                   display:
 *                     type: string
 *                     example: Hemoglobin [Mass/volume] in Blood
 *         valueQuantity:
 *           type: object
 *           description: Numerical value (with units)
 *           properties:
 *             value:
 *               type: number
 *               example: 14.1
 *             unit:
 *               type: string
 *               example: g/dL
 *             system:
 *               type: string
 *               example: http://unitsofmeasure.org
 *             code:
 *               type: string
 *               example: g/dL
 */

/**
 * @swagger
 * /Observation:
 *   get:
 *     summary: Get all observations or filter by patient and/or category
 *     tags: [Observation]
 *     description: Retrieve a list of observations, optionally filtered by patient and/or category
 *     parameters:
 *       - in: query
 *         name: patient
 *         schema:
 *           type: string
 *         description: Patient ID to filter by
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter by (laboratory, survey, assessment, etc.)
 *     responses:
 *       200:
 *         description: A FHIR Bundle containing Observation resources
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bundle'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OperationOutcome'
 */
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

/**
 * @swagger
 * /Observation/{id}:
 *   get:
 *     summary: Get an observation by ID
 *     tags: [Observation]
 *     description: Retrieve a single observation by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Observation ID
 *     responses:
 *       200:
 *         description: Observation resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Observation'
 *       404:
 *         description: Observation not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OperationOutcome'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OperationOutcome'
 */
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

/**
 * @swagger
 * /Observation:
 *   all:
 *     summary: Method not allowed
 *     description: Catch-all for unsupported methods
 *     responses:
 *       405:
 *         description: Method not allowed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OperationOutcome'
 */
// Catch-all for unsupported methods
router.all('*', (req, res) => {
  res.status(405).json(createOperationOutcome(
    `Method ${req.method} not allowed`,
    'error',
    'not-supported'
  ));
});

module.exports = router;