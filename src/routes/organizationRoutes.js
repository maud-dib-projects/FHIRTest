const express = require('express');
const router = express.Router();
const organizationData = require('../data/organizationData');
const { createOperationOutcome, createBundle } = require('../utils/responseUtils');

/**
 * @swagger
 * tags:
 *   name: Organization
 *   description: FHIR Organization resource management
 */

/**
 * @swagger
 * /api/v1/Organization:
 *   get:
 *     summary: Retrieve all Organizations (Insurance Companies)
 *     tags: [Organization]
 *     description: Returns a FHIR Bundle containing all Organization resources.
 *     responses:
 *       200:
 *         description: A Bundle of Organization resources
 *         content:
 *           application/fhir+json:
 *             schema:
 *               $ref: '#/components/schemas/Bundle'
 *       500:
 *         description: Internal server error
 */
router.get('/', (req, res) => {
  try {
    const bundle = createBundle(organizationData, req.originalUrl);
    res.json(bundle);
  } catch (error) {
    console.error('Error fetching all organizations:', error);
    res.status(500).json(createOperationOutcome('error', 'exception', 'Internal server error while fetching organizations.'));
  }
});

/**
 * @swagger
 * /api/v1/Organization/{id}:
 *   get:
 *     summary: Retrieve a specific Organization by ID
 *     tags: [Organization]
 *     description: Returns a single FHIR Organization resource based on its logical ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Logical ID of the Organization resource to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested Organization resource
 *         content:
 *           application/fhir+json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: Organization not found
 *         content:
 *           application/fhir+json:
 *             schema:
 *               $ref: '#/components/schemas/OperationOutcome'
 *       500:
 *         description: Internal server error
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const organization = organizationData.find(org => org.id === id);

    if (!organization) {
      return res.status(404).json(createOperationOutcome('error', 'not-found', `Organization with id ${id} not found.`));
    }

    res.json(organization);
  } catch (error) {
    console.error(`Error fetching organization with id ${req.params.id}:`, error);
    res.status(500).json(createOperationOutcome('error', 'exception', `Internal server error while fetching organization with id ${req.params.id}.`));
  }
});

module.exports = router; 