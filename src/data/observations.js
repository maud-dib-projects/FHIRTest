/**
 * Sample observation data following FHIR R4 standard
 * Includes both laboratory and assessment observations
 */
const observations = [
  // Laboratory observations for Patient 1 (Lopez - Lupus patient)
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
          code: "56540-8",
          display: "Anti-nuclear antibody (ANA) panel"
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
    hasMember: [
      {
        reference: "Observation/obs-lab-12345-1-ana-titer"
      },
      {
        reference: "Observation/obs-lab-12345-1-ana-pattern"
      }
    ],
    note: [
      {
        text: "Strong positive ANA result consistent with autoimmune disorder."
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-12345-1-ana-titer",
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
          code: "5041-9",
          display: "Anti-nuclear antibody titer"
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
    valueString: "1:640",
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
    id: "obs-lab-12345-1-ana-pattern",
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
          code: "26447-3",
          display: "Anti-nuclear antibody pattern"
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
    valueCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "442037110",
          display: "Homogeneous pattern"
        }
      ],
      text: "Homogeneous"
    }
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
          code: "51500-8",
          display: "Anti-double stranded DNA antibody [Titer]"
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
      value: 75,
      unit: "IU/mL",
      system: "http://unitsofmeasure.org",
      code: "IU/mL"
    },
    referenceRange: [
      {
        low: {
          value: 0,
          unit: "IU/mL",
          system: "http://unitsofmeasure.org",
          code: "IU/mL"
        },
        high: {
          value: 30,
          unit: "IU/mL",
          system: "http://unitsofmeasure.org",
          code: "IU/mL"
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
    id: "obs-lab-12345-3",
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
          code: "4625-0",
          display: "Complete Blood Count"
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
    hasMember: [
      {
        reference: "Observation/obs-lab-12345-3-hemoglobin"
      },
      {
        reference: "Observation/obs-lab-12345-3-wbc"
      },
      {
        reference: "Observation/obs-lab-12345-3-platelets"
      }
    ]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-12345-3-hemoglobin",
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
      value: 10.5,
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
        ]
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
  {
    resourceType: "Observation",
    id: "obs-lab-12345-3-platelets",
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
          code: "777-3",
          display: "Platelets [#/volume] in Blood"
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
      value: 95,
      unit: "10*9/L",
      system: "http://unitsofmeasure.org",
      code: "10*9/L"
    },
    referenceRange: [
      {
        low: {
          value: 150,
          unit: "10*9/L",
          system: "http://unitsofmeasure.org",
          code: "10*9/L"
        },
        high: {
          value: 400,
          unit: "10*9/L",
          system: "http://unitsofmeasure.org",
          code: "10*9/L"
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
  
  // Assessment observation for Patient 1 (Lopez - Lupus patient)
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
          system: "http://snomed.info/sct",
          code: "5880005",
          display: "Physical examination"
        }
      ],
      text: "Lupus Assessment"
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
    note: [
      {
        text: "Patient presents with malar rash, photosensitivity, and joint pain in hands and knees. SLEDAI score of 12 indicating moderate disease activity."
      }
    ],
    component: [
      {
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "103244003",
              display: "Dermatological finding"
            }
          ],
          text: "Malar Rash"
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "52448006",
              display: "Present"
            }
          ],
          text: "Present"
        }
      },
      {
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "371030004",
              display: "Photosensitivity"
            }
          ]
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "52448006",
              display: "Present"
            }
          ],
          text: "Present"
        }
      },
      {
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "57676002",
              display: "Joint pain"
            }
          ]
        },
        valueCodeableConcept: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "52448006",
              display: "Present"
            }
          ],
          text: "Present in hands and knees"
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