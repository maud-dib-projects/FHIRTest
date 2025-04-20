const express = require('express');
const router = express.Router();
const medicationDispenses = require('../data/medicationDispenses');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

/**
 * @swagger
 * components:
 *   schemas:
 *     MedicationDispense:
 *       type: object
 *       required:
 *         - resourceType
 *         - id
 *         - status
 *         - subject
 *       properties:
 *         resourceType:
 *           type: string
 *           example: MedicationDispense
 *           description: Resource type must be "MedicationDispense"
 *         id:
 *           type: string
 *           example: med-dispense-001
 *           description: Logical id of the resource
 *         status:
 *           type: string
 *           enum: [preparation, in-progress, cancelled, on-hold, completed, entered-in-error, stopped, declined, unknown]
 *           example: completed
 *           description: The status of the dispense event
 *         subject:
 *           type: object
 *           required:
 *             - reference
 *           properties:
 *             reference:
 *               type: string
 *               example: Patient/patient-001
 *               description: Reference to the patient who received the medication
 *         medicationCodeableConcept:
 *           type: object
 *           description: Medication that was dispensed
 *           properties:
 *             coding:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   system:
 *                     type: string
 *                     example: http://www.nlm.nih.gov/research/umls/rxnorm
 *                   code:
 *                     type: string
 *                     example: 308192
 *                   display:
 *                     type: string
 *                     example: Amoxicillin 500 MG
 */

/**
 * @swagger
 * /MedicationDispense:
 *   get:
 *     summary: Get all medication dispenses or filter by patient
 *     tags: [MedicationDispense]
 *     description: Retrieve a list of medication dispenses, optionally filtered by patient
 *     parameters:
 *       - in: query
 *         name: patient
 *         schema:
 *           type: string
 *         description: Patient ID to filter by
 *     responses:
 *       200:
 *         description: A FHIR Bundle containing MedicationDispense resources
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

/**
 * @swagger
 * /MedicationDispense/{id}:
 *   get:
 *     summary: Get a medication dispense by ID
 *     tags: [MedicationDispense]
 *     description: Retrieve a single medication dispense by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MedicationDispense ID
 *     responses:
 *       200:
 *         description: MedicationDispense resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MedicationDispense'
 *       404:
 *         description: MedicationDispense not found
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

/**
 * @swagger
 * /MedicationDispense:
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