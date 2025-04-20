/**
 * Sample medication dispense data following FHIR R4 standard
 */
const medicationDispenses = [
  // Patient 001 Medication Dispenses
  {
    resourceType: 'MedicationDispense',
    id: 'med-dispense-001',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '198440',
          display: 'Atorvastatin 40 MG Oral Tablet'
        }
      ],
      text: 'Atorvastatin 40 MG Oral Tablet'
    },
    subject: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    whenHandedOver: '2023-01-15T15:30:00Z',
    dosageInstruction: [
      {
        text: 'Take 1 tablet by mouth once daily at bedtime',
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: 'd'
          }
        },
        route: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '26643006',
              display: 'Oral route'
            }
          ]
        },
        doseAndRate: [
          {
            doseQuantity: {
              value: 1,
              unit: 'tablet',
              system: 'http://unitsofmeasure.org',
              code: 'TAB'
            }
          }
        ]
      }
    ],
    quantity: {
      value: 30,
      unit: 'tablets',
      system: 'http://unitsofmeasure.org',
      code: 'TAB'
    },
    daysSupply: {
      value: 30,
      unit: 'days'
    }
  },
  {
    resourceType: 'MedicationDispense',
    id: 'med-dispense-002',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '197770',
          display: 'Amlodipine 5 MG Oral Tablet'
        }
      ],
      text: 'Amlodipine 5 MG Oral Tablet'
    },
    subject: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    whenHandedOver: '2023-01-15T15:30:00Z',
    dosageInstruction: [
      {
        text: 'Take 1 tablet by mouth daily',
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: 'd'
          }
        },
        route: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '26643006',
              display: 'Oral route'
            }
          ]
        },
        doseAndRate: [
          {
            doseQuantity: {
              value: 1,
              unit: 'tablet',
              system: 'http://unitsofmeasure.org',
              code: 'TAB'
            }
          }
        ]
      }
    ],
    quantity: {
      value: 30,
      unit: 'tablets',
      system: 'http://unitsofmeasure.org',
      code: 'TAB'
    },
    daysSupply: {
      value: 30,
      unit: 'days'
    }
  },
  
  // Patient 002 Medication Dispenses
  {
    resourceType: 'MedicationDispense',
    id: 'med-dispense-003',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '310965',
          display: 'Lisinopril 10 MG Oral Tablet'
        }
      ],
      text: 'Lisinopril 10 MG Oral Tablet'
    },
    subject: {
      reference: 'Patient/patient-002',
      display: 'Emily Johnson'
    },
    whenHandedOver: '2023-02-10T14:45:00Z',
    dosageInstruction: [
      {
        text: 'Take 1 tablet by mouth once daily',
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: 'd'
          }
        },
        route: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '26643006',
              display: 'Oral route'
            }
          ]
        },
        doseAndRate: [
          {
            doseQuantity: {
              value: 1,
              unit: 'tablet',
              system: 'http://unitsofmeasure.org',
              code: 'TAB'
            }
          }
        ]
      }
    ],
    quantity: {
      value: 30,
      unit: 'tablets',
      system: 'http://unitsofmeasure.org',
      code: 'TAB'
    },
    daysSupply: {
      value: 30,
      unit: 'days'
    }
  },
  
  // Patient 003 Medication Dispenses
  {
    resourceType: 'MedicationDispense',
    id: 'med-dispense-004',
    status: 'completed',
    medicationCodeableConcept: {
      coding: [
        {
          system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
          code: '866924',
          display: 'Metformin hydrochloride 1000 MG Oral Tablet'
        }
      ],
      text: 'Metformin 1000 MG Oral Tablet'
    },
    subject: {
      reference: 'Patient/patient-003',
      display: 'Miguel Garcia'
    },
    whenHandedOver: '2023-03-05T10:15:00Z',
    dosageInstruction: [
      {
        text: 'Take 1 tablet by mouth twice daily with meals',
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: 'd'
          }
        },
        route: {
          coding: [
            {
              system: 'http://snomed.info/sct',
              code: '26643006',
              display: 'Oral route'
            }
          ]
        },
        doseAndRate: [
          {
            doseQuantity: {
              value: 1,
              unit: 'tablet',
              system: 'http://unitsofmeasure.org',
              code: 'TAB'
            }
          }
        ]
      }
    ],
    quantity: {
      value: 60,
      unit: 'tablets',
      system: 'http://unitsofmeasure.org',
      code: 'TAB'
    },
    daysSupply: {
      value: 30,
      unit: 'days'
    }
  }
];

module.exports = medicationDispenses;