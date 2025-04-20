/**
 * Sample observation data following FHIR R4 standard
 * Includes both laboratory and assessment observations
 */
const observations = [
  // Patient 001 Lab Observations
  {
    resourceType: 'Observation',
    id: 'obs-lab-001',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
            display: 'Laboratory'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '2093-3',
          display: 'Cholesterol [Mass/volume] in Serum or Plasma'
        }
      ],
      text: 'Total Cholesterol'
    },
    subject: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    effectiveDateTime: '2023-01-05T09:30:00Z',
    issued: '2023-01-05T10:45:00Z',
    valueQuantity: {
      value: 210,
      unit: 'mg/dL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/dL'
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        high: {
          value: 200,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
              code: 'normal',
              display: 'Normal Range'
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High'
          }
        ]
      }
    ]
  },
  {
    resourceType: 'Observation',
    id: 'obs-lab-002',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
            display: 'Laboratory'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '2571-8',
          display: 'Triglyceride [Mass/volume] in Serum or Plasma'
        }
      ],
      text: 'Triglycerides'
    },
    subject: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    effectiveDateTime: '2023-01-05T09:30:00Z',
    issued: '2023-01-05T10:45:00Z',
    valueQuantity: {
      value: 180,
      unit: 'mg/dL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/dL'
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        high: {
          value: 150,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
              code: 'normal',
              display: 'Normal Range'
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High'
          }
        ]
      }
    ]
  },

  // Patient 001 Assessment Observations
  {
    resourceType: 'Observation',
    id: 'obs-assessment-001',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'survey',
            display: 'Survey'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '89204-2',
          display: 'Patient Health Questionnaire-9 [PHQ-9] total score [Reported]'
        }
      ],
      text: 'PHQ-9 Depression Assessment'
    },
    subject: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    effectiveDateTime: '2023-01-10T14:00:00Z',
    issued: '2023-01-10T14:15:00Z',
    valueInteger: 4,
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'N',
            display: 'Normal'
          }
        ],
        text: 'Minimal depression'
      }
    ],
    note: [
      {
        text: 'Patient reports occasional feelings of being down but denies any significant depressive symptoms.'
      }
    ]
  },

  // Patient 002 Lab Observations
  {
    resourceType: 'Observation',
    id: 'obs-lab-003',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
            display: 'Laboratory'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '4548-4',
          display: 'Hemoglobin A1c/Hemoglobin.total in Blood'
        }
      ],
      text: 'Hemoglobin A1c'
    },
    subject: {
      reference: 'Patient/patient-002',
      display: 'Emily Johnson'
    },
    effectiveDateTime: '2023-02-15T10:00:00Z',
    issued: '2023-02-15T12:30:00Z',
    valueQuantity: {
      value: 5.7,
      unit: '%',
      system: 'http://unitsofmeasure.org',
      code: '%'
    },
    referenceRange: [
      {
        low: {
          value: 4.0,
          unit: '%',
          system: 'http://unitsofmeasure.org',
          code: '%'
        },
        high: {
          value: 5.6,
          unit: '%',
          system: 'http://unitsofmeasure.org',
          code: '%'
        },
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
              code: 'normal',
              display: 'Normal Range'
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High'
          }
        ],
        text: 'Prediabetes'
      }
    ]
  },

  // Patient 002 Assessment Observations
  {
    resourceType: 'Observation',
    id: 'obs-assessment-002',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'survey',
            display: 'Survey'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '69737-5',
          display: 'Generalized anxiety disorder 7 item (GAD-7) total score [Reported]'
        }
      ],
      text: 'GAD-7 Anxiety Assessment'
    },
    subject: {
      reference: 'Patient/patient-002',
      display: 'Emily Johnson'
    },
    effectiveDateTime: '2023-02-15T11:00:00Z',
    issued: '2023-02-15T11:15:00Z',
    valueInteger: 12,
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High'
          }
        ],
        text: 'Moderate anxiety'
      }
    ],
    note: [
      {
        text: 'Patient reports frequent worry and difficulty relaxing. Recommend follow-up with mental health provider.'
      }
    ]
  },

  // Patient 003 Lab Observations
  {
    resourceType: 'Observation',
    id: 'obs-lab-004',
    status: 'final',
    category: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/observation-category',
            code: 'laboratory',
            display: 'Laboratory'
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '2339-0',
          display: 'Glucose [Mass/volume] in Blood'
        }
      ],
      text: 'Fasting Blood Glucose'
    },
    subject: {
      reference: 'Patient/patient-003',
      display: 'Miguel Garcia'
    },
    effectiveDateTime: '2023-03-10T08:15:00Z',
    issued: '2023-03-10T09:30:00Z',
    valueQuantity: {
      value: 140,
      unit: 'mg/dL',
      system: 'http://unitsofmeasure.org',
      code: 'mg/dL'
    },
    referenceRange: [
      {
        low: {
          value: 70,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        high: {
          value: 99,
          unit: 'mg/dL',
          system: 'http://unitsofmeasure.org',
          code: 'mg/dL'
        },
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/referencerange-meaning',
              code: 'normal',
              display: 'Normal Range'
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
            code: 'H',
            display: 'High'
          }
        ],
        text: 'Impaired Fasting Glucose'
      }
    ]
  }
];

module.exports = observations;