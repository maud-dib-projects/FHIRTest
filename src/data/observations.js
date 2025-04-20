/**
 * Sample observation data following FHIR R4 standard
 * Includes both laboratory and assessment observations
 */
const observations = [
  // Laboratory observations for Patient 1 (Lopez)
  {
    resourceType: "Observation",
    id: "obs-lab-12345-1",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2093-3",
          display: "Cholesterol, Total"
        }
      ]
    },
    subject: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    effectiveDateTime: "2023-04-15T08:30:00Z",
    issued: "2023-04-15T10:45:00Z",
    performer: [
      {
        reference: "Organization/org-lab-12345",
        display: "Downtown Medical Laboratory"
      }
    ],
    valueQuantity: {
      value: 210,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL"
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 200,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-12345-2",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2571-8",
          display: "Triglycerides"
        }
      ]
    },
    subject: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    effectiveDateTime: "2023-04-15T08:30:00Z",
    issued: "2023-04-15T10:45:00Z",
    performer: [
      {
        reference: "Organization/org-lab-12345",
        display: "Downtown Medical Laboratory"
      }
    ],
    valueQuantity: {
      value: 180,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL"
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 150,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ]
  },
  
  // Assessment observation for Patient 1 (Lopez)
  {
    resourceType: "Observation",
    id: "obs-assess-12345",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "exam",
            display: "Exam"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "85354-9",
          display: "Blood pressure panel with all children optional"
        }
      ],
      text: "Blood pressure assessment"
    },
    subject: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    effectiveDateTime: "2023-05-05T14:20:00Z",
    performer: [
      {
        reference: "Practitioner/pract-12345",
        display: "Dr. Sarah Johnson"
      }
    ],
    component: [
      {
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "8480-6",
              display: "Systolic blood pressure"
            }
          ]
        },
        valueQuantity: {
          value: 142,
          unit: "mmHg",
          system: "http://unitsofmeasure.org",
          code: "mm[Hg]"
        },
        interpretation: [
          {
            coding: [
              {
                system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
                code: "H",
                display: "High"
              }
            ]
          }
        ]
      },
      {
        code: {
          coding: [
            {
              system: "http://loinc.org",
              code: "8462-4",
              display: "Diastolic blood pressure"
            }
          ]
        },
        valueQuantity: {
          value: 88,
          unit: "mmHg",
          system: "http://unitsofmeasure.org",
          code: "mm[Hg]"
        }
      }
    ]
  },
  
  // Laboratory observations for Patient 2 (Lin)
  {
    resourceType: "Observation",
    id: "obs-lab-67890-1",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2339-0",
          display: "Glucose"
        }
      ]
    },
    subject: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    effectiveDateTime: "2023-06-02T09:15:00Z",
    issued: "2023-06-02T11:30:00Z",
    performer: [
      {
        reference: "Organization/org-lab-67890",
        display: "Central Clinical Laboratory"
      }
    ],
    valueQuantity: {
      value: 115,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL"
    },
    referenceRange: [
      {
        low: {
          value: 70,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 100,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-67890-2",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2093-3",
          display: "Cholesterol, Total"
        }
      ]
    },
    subject: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    effectiveDateTime: "2023-06-02T09:15:00Z",
    issued: "2023-06-02T11:30:00Z",
    performer: [
      {
        reference: "Organization/org-lab-67890",
        display: "Central Clinical Laboratory"
      }
    ],
    valueQuantity: {
      value: 240,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL"
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        high: {
          value: 200,
          unit: "mg/dL",
          system: "http://unitsofmeasure.org",
          code: "mg/dL"
        },
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ]
      }
    ]
  },
  
  // Assessment observation for Patient 2 (Lin)
  {
    resourceType: "Observation",
    id: "obs-assess-67890",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "vital-signs",
            display: "Vital Signs"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "29463-7",
          display: "Body weight"
        }
      ],
      text: "Weight Measurement"
    },
    subject: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    effectiveDateTime: "2023-06-10T10:45:00Z",
    performer: [
      {
        reference: "Practitioner/pract-67890",
        display: "Dr. Michael Chen"
      }
    ],
    valueQuantity: {
      value: 82.5,
      unit: "kg",
      system: "http://unitsofmeasure.org",
      code: "kg"
    }
  },
  
  // Laboratory observations for Patient 3 (Powell)
  {
    resourceType: "Observation",
    id: "obs-lab-54321-1",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "58410-2",
          display: "Complete blood count (hemogram) panel - Blood by Automated count"
        }
      ],
      text: "CBC"
    },
    subject: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    effectiveDateTime: "2023-03-20T08:00:00Z",
    issued: "2023-03-20T10:20:00Z",
    performer: [
      {
        reference: "Organization/org-lab-54321",
        display: "Riverside Laboratory Services"
      }
    ],
    hasMember: [
      {
        reference: "Observation/obs-lab-54321-1-wbc"
      },
      {
        reference: "Observation/obs-lab-54321-1-rbc"
      },
      {
        reference: "Observation/obs-lab-54321-1-hgb"
      },
      {
        reference: "Observation/obs-lab-54321-1-hct"
      },
      {
        reference: "Observation/obs-lab-54321-1-plt"
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-54321-1-hgb",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "Laboratory"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "718-7",
          display: "Hemoglobin [Mass/volume] in Blood"
        }
      ],
      text: "Hemoglobin"
    },
    subject: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    effectiveDateTime: "2023-03-20T08:00:00Z",
    issued: "2023-03-20T10:20:00Z",
    performer: [
      {
        reference: "Organization/org-lab-54321",
        display: "Riverside Laboratory Services"
      }
    ],
    valueQuantity: {
      value: 11.2,
      unit: "g/dL",
      system: "http://unitsofmeasure.org",
      code: "g/dL"
    },
    referenceRange: [
      {
        low: {
          value: 12.0,
          unit: "g/dL",
          system: "http://unitsofmeasure.org",
          code: "g/dL"
        },
        high: {
          value: 15.5,
          unit: "g/dL",
          system: "http://unitsofmeasure.org",
          code: "g/dL"
        },
        appliesTo: [
          {
            text: "Adult female"
          }
        ],
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              code: "normal",
              display: "Normal Range"
            }
          ]
        }
      }
    ],
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "L",
            display: "Low"
          }
        ]
      }
    ]
  },
  
  // Assessment observation for Patient 3 (Powell)
  {
    resourceType: "Observation",
    id: "obs-assess-54321",
    status: "final",
    category: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "survey",
            display: "Survey"
          }
        ]
      }
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "44261-6",
          display: "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]"
        }
      ],
      text: "PHQ-9 Depression Assessment"
    },
    subject: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    effectiveDateTime: "2023-03-25T13:30:00Z",
    performer: [
      {
        reference: "Practitioner/pract-54321",
        display: "Dr. Jessica Taylor"
      }
    ],
    valueInteger: 14,
    interpretation: [
      {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            code: "H",
            display: "High"
          }
        ],
        text: "Moderately severe depression"
      }
    ],
    note: [
      {
        text: "Patient reports persistent feelings of sadness and fatigue for the past 3 months. Recommend follow-up with mental health provider."
      }
    ]
  }
];

module.exports = observations;