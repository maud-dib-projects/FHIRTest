/**
 * Sample medication dispense data following FHIR R4 standard
 */
const medicationDispenses = [
  {
    resourceType: "MedicationDispense",
    id: "med-disp-12345",
    status: "completed",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "835829",
          display: "Hydroxychloroquine 200 MG Oral Tablet"
        }
      ]
    },
    subject: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    performer: [
      {
        actor: {
          reference: "Practitioner/pract-12345",
          display: "Dr. Sarah Johnson"
        }
      }
    ],
    authorizingPrescription: [
      {
        reference: "MedicationRequest/medrx-12345"
      }
    ],
    quantity: {
      value: 60,
      unit: "tablets",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB"
    },
    daysSupply: {
      value: 30,
      unit: "days"
    },
    whenPrepared: "2023-05-10T10:30:00Z",
    whenHandedOver: "2023-05-10T14:45:00Z",
    dosageInstruction: [
      {
        sequence: 1,
        text: "Take one tablet by mouth twice daily",
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d"
          }
        },
        route: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "26643006",
              display: "Oral route"
            }
          ]
        },
        doseAndRate: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  code: "ordered",
                  display: "Ordered"
                }
              ]
            },
            doseQuantity: {
              value: 1,
              unit: "tablet",
              system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB"
            }
          }
        ]
      }
    ]
  },
  {
    resourceType: "MedicationDispense",
    id: "med-disp-12346",
    status: "completed",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "310965",
          display: "Prednisone 10 MG Oral Tablet"
        }
      ]
    },
    subject: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    performer: [
      {
        actor: {
          reference: "Practitioner/pract-12345",
          display: "Dr. Sarah Johnson"
        }
      }
    ],
    authorizingPrescription: [
      {
        reference: "MedicationRequest/medrx-12346"
      }
    ],
    quantity: {
      value: 30,
      unit: "tablets",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB"
    },
    daysSupply: {
      value: 30,
      unit: "days"
    },
    whenPrepared: "2023-05-10T10:30:00Z",
    whenHandedOver: "2023-05-10T14:45:00Z",
    dosageInstruction: [
      {
        sequence: 1,
        text: "Take one tablet by mouth daily in the morning with food",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
            when: ["ACM"]
          }
        },
        route: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "26643006",
              display: "Oral route"
            }
          ]
        },
        doseAndRate: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  code: "ordered",
                  display: "Ordered"
                }
              ]
            },
            doseQuantity: {
              value: 1,
              unit: "tablet",
              system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB"
            }
          }
        ]
      }
    ]
  },
  {
    resourceType: "MedicationDispense",
    id: "med-disp-67890",
    status: "completed",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "197319",
          display: "Atorvastatin 10 MG Oral Tablet"
        }
      ]
    },
    subject: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    performer: [
      {
        actor: {
          reference: "Practitioner/pract-67890",
          display: "Dr. Michael Chen"
        }
      }
    ],
    authorizingPrescription: [
      {
        reference: "MedicationRequest/medrx-67890"
      }
    ],
    quantity: {
      value: 90,
      unit: "tablets",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB"
    },
    daysSupply: {
      value: 90,
      unit: "days"
    },
    whenPrepared: "2023-06-15T09:20:00Z",
    whenHandedOver: "2023-06-15T13:30:00Z",
    dosageInstruction: [
      {
        sequence: 1,
        text: "Take one tablet by mouth daily at bedtime",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
            when: ["HS"]
          }
        },
        route: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "26643006",
              display: "Oral route"
            }
          ]
        },
        doseAndRate: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  code: "ordered",
                  display: "Ordered"
                }
              ]
            },
            doseQuantity: {
              value: 1,
              unit: "tablet",
              system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB"
            }
          }
        ]
      }
    ]
  },
  {
    resourceType: "MedicationDispense",
    id: "med-disp-54321",
    status: "completed",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://www.nlm.nih.gov/research/umls/rxnorm",
          code: "1049221",
          display: "Sertraline 50 MG Oral Tablet"
        }
      ]
    },
    subject: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    performer: [
      {
        actor: {
          reference: "Practitioner/pract-54321",
          display: "Dr. Jessica Taylor"
        }
      }
    ],
    authorizingPrescription: [
      {
        reference: "MedicationRequest/medrx-54321"
      }
    ],
    quantity: {
      value: 30,
      unit: "tablets",
      system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
      code: "TAB"
    },
    daysSupply: {
      value: 30,
      unit: "days"
    },
    whenPrepared: "2023-04-05T11:15:00Z",
    whenHandedOver: "2023-04-05T16:20:00Z",
    dosageInstruction: [
      {
        sequence: 1,
        text: "Take one tablet by mouth once daily in the morning with food",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
            when: ["ACM"]
          }
        },
        route: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "26643006",
              display: "Oral route"
            }
          ]
        },
        doseAndRate: [
          {
            type: {
              coding: [
                {
                  system: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                  code: "ordered",
                  display: "Ordered"
                }
              ]
            },
            doseQuantity: {
              value: 1,
              unit: "tablet",
              system: "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
              code: "TAB"
            }
          }
        ]
      }
    ]
  }
];

module.exports = medicationDispenses;