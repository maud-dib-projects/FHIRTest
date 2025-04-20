const express = require('express');
const router = express.Router();
const coverages = require('../data/coverages');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

/**
 * @swagger
 * components:
 *   schemas:
 *     Coverage:
 *       type: object
 *       required:
 *         - resourceType
 *         - id
 *         - status
 *         - beneficiary
 *       properties:
 *         resourceType:
 *           type: string
 *           example: Coverage
 *           description: Resource type must be "Coverage"
 *         id:
 *           type: string
 *           example: coverage-001
 *           description: Logical id of the resource
 *         status:
 *           type: string
 *           enum: [active, cancelled, draft, entered-in-error]
 *           example: active
 *           description: The status of the coverage
 *         beneficiary:
 *           type: object
 *           required:
 *             - reference
 *           properties:
 *             reference:
 *               type: string
 *               example: Patient/patient-001
 *               description: Reference to the patient covered by this insurance
 */

/**
 * @swagger
 * /Coverage:
 *   get:
 *     summary: Get all coverages or filter by patient
 *     tags: [Coverage]
 *     description: Retrieve a list of coverages, optionally filtered by patient/beneficiary
 *     parameters:
 *       - in: query
 *         name: patient
 *         schema:
 *           type: string
 *         description: Patient ID to filter by
 *       - in: query
 *         name: beneficiary
 *         schema:
 *           type: string
 *         description: Beneficiary ID to filter by (alternative to patient parameter)
 *     responses:
 *       200:
 *         description: A FHIR Bundle containing Coverage resources
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

/**
 * @swagger
 * /Coverage/{id}:
 *   get:
 *     summary: Get a coverage by ID
 *     tags: [Coverage]
 *     description: Retrieve a single coverage by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Coverage ID
 *     responses:
 *       200:
 *         description: Coverage resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coverage'
 *       404:
 *         description: Coverage not found
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

/**
 * @swagger
 * /Coverage:
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