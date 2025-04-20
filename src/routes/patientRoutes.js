const express = require('express');
const router = express.Router();
const patients = require('../data/patients');
const { createBundle, createOperationOutcome } = require('../utils/responseUtils');

/**
 * @swagger
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - resourceType
 *         - id
 *       properties:
 *         resourceType:
 *           type: string
 *           example: Patient
 *           description: Resource type must be "Patient"
 *         id:
 *           type: string
 *           example: patient-001
 *           description: Logical id of the resource
 *         identifier:
 *           type: array
 *           description: Business identifiers for this patient
 *           items:
 *             type: object
 *             properties:
 *               system:
 *                 type: string
 *                 example: http://example.org/fhir/mrn
 *                 description: The namespace for the identifier value
 *               value:
 *                 type: string
 *                 example: MRN12345
 *                 description: The value that is unique within the system
 *         active:
 *           type: boolean
 *           example: true
 *           description: Whether this patient record is in active use
 *         meta:
 *           type: object
 *           properties:
 *             profile:
 *               type: array
 *               items:
 *                 type: string
 *                 example: http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
 *                 description: FHIR profile the resource conforms to
 *         name:
 *           type: array
 *           description: A name associated with the patient
 *           items:
 *             type: object
 *             properties:
 *               use:
 *                 type: string
 *                 enum: [official, usual, temp, nickname, anonymous, old, maiden]
 *                 example: official
 *                 description: The use of this name
 *               family:
 *                 type: string
 *                 example: Smith
 *                 description: Family name (often called 'last name')
 *               given:
 *                 type: array
 *                 description: Given names (first name, middle names)
 *                 items:
 *                   type: string
 *                   example: John
 *         telecom:
 *           type: array
 *           description: A contact detail for the patient
 *           items:
 *             type: object
 *             properties:
 *               system:
 *                 type: string
 *                 enum: [phone, fax, email, pager, url, sms, other]
 *                 example: phone
 *                 description: Type of contact system
 *               value:
 *                 type: string
 *                 example: 555-123-4567
 *                 description: The actual contact point details
 *               use:
 *                 type: string
 *                 enum: [home, work, temp, old, mobile]
 *                 example: home
 *                 description: Purpose of this contact point
 *         gender:
 *           type: string
 *           enum: [male, female, other, unknown]
 *           example: male
 *           description: Administrative gender - the gender that the patient is considered to have for administration and record keeping purposes
 *         birthDate:
 *           type: string
 *           format: date
 *           example: 1970-01-25
 *           description: The date of birth for the patient
 *         address:
 *           type: array
 *           description: Addresses for the patient
 *           items:
 *             type: object
 *             properties:
 *               use:
 *                 type: string
 *                 enum: [home, work, temp, old, billing]
 *                 example: home
 *                 description: The purpose of this address
 *               line:
 *                 type: array
 *                 description: Street name, number, etc.
 *                 items:
 *                   type: string
 *                   example: 123 Main St
 *               city:
 *                 type: string
 *                 example: Anytown
 *                 description: The city or town
 *               state:
 *                 type: string
 *                 example: CA
 *                 description: Sub-unit of country (abbreviations ok)
 *               postalCode:
 *                 type: string
 *                 example: 12345
 *                 description: Postal code for area
 *               country:
 *                 type: string
 *                 example: USA
 *                 description: Country
 * 
 * @swagger
 * components:
 *   schemas:
 *     Bundle:
 *       type: object
 *       required:
 *         - resourceType
 *         - type
 *       properties:
 *         resourceType:
 *           type: string
 *           example: Bundle
 *           description: Resource type must be "Bundle"
 *         type:
 *           type: string
 *           enum: [document, message, transaction, transaction-response, batch, batch-response, history, searchset, collection]
 *           example: searchset
 *           description: Type of bundle (searchset for search results)
 *         total:
 *           type: integer
 *           example: 3
 *           description: Total number of matches
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: 2023-01-01T12:00:00Z
 *           description: When the bundle was assembled
 *         link:
 *           type: array
 *           description: Links related to this Bundle
 *           items:
 *             type: object
 *             required:
 *               - relation
 *               - url
 *             properties:
 *               relation:
 *                 type: string
 *                 example: self
 *                 description: Relation type (self, next, etc.)
 *               url:
 *                 type: string
 *                 example: http://example.org/fhir/Patient
 *                 description: URL for the link
 *         entry:
 *           type: array
 *           description: Entry in the bundle - will have a resource or information
 *           items:
 *             type: object
 *             properties:
 *               fullUrl:
 *                 type: string
 *                 example: http://example.org/fhir/Patient/patient-001
 *                 description: Full URL for resource (Absolute URL server address or URI for resource)
 *               resource:
 *                 type: object
 *                 description: A resource in the bundle
 *                 $ref: '#/components/schemas/Patient'
 *
 * @swagger
 * components:
 *   schemas:
 *     OperationOutcome:
 *       type: object
 *       required:
 *         - resourceType
 *         - issue
 *       properties:
 *         resourceType:
 *           type: string
 *           example: OperationOutcome
 *           description: Resource type must be "OperationOutcome"
 *         issue:
 *           type: array
 *           description: A single issue associated with the action
 *           items:
 *             type: object
 *             required:
 *               - severity
 *               - code
 *             properties:
 *               severity:
 *                 type: string
 *                 enum: [fatal, error, warning, information]
 *                 example: error
 *                 description: Severity of the issue
 *               code:
 *                 type: string
 *                 example: not-found
 *                 description: Error or warning code
 *               details:
 *                 type: object
 *                 description: Additional details about the error
 *                 properties:
 *                   text:
 *                     type: string
 *                     example: Resource not found
 *                     description: Additional description of the issue
 */

/**
 * @swagger
 * /Patient:
 *   get:
 *     summary: Get all patients
 *     tags: [Patient]
 *     description: Retrieve a list of all patients, returned as a FHIR Bundle
 *     responses:
 *       200:
 *         description: A FHIR Bundle containing Patient resources
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
router.get('/', (req, res) => {
  res.json(createBundle(patients, 'searchset', `${req.protocol}://${req.get('host')}${req.baseUrl}`));
});

/**
 * @swagger
 * /Patient/{id}:
 *   get:
 *     summary: Get a patient by ID
 *     tags: [Patient]
 *     description: Retrieve a single patient by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Patient ID
 *     responses:
 *       200:
 *         description: Patient resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       404:
 *         description: Patient not found
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
router.get('/:id', (req, res) => {
  const patient = patients.find(p => p.id === req.params.id);
  
  if (!patient) {
    return res.status(404).json(createOperationOutcome(
      `Patient with ID ${req.params.id} not found`,
      'error',
      'not-found'
    ));
  }
  
  res.json(patient);
});

/**
 * @swagger
 * /Patient:
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