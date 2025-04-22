/**
 * Sample coverage data following FHIR R4 standard
 */
const coverages = [
  {
    resourceType: "Coverage",
    id: "cov-12345",
    status: "active",
    identifier: [
      {
        system: "https://www.bluecross.example.com/policy",
        value: "POL987654321",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MB",
              display: "Member Number"
            }
          ]
        }
      }
    ],
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "EHCPOL",
          display: "extended healthcare"
        }
      ]
    },
    subscriber: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    subscriberId: "BC98765432",
    beneficiary: {
      reference: "Patient/erXuFYUfucBZaryVksYEcMg3"
    },
    relationship: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
          code: "self"
        }
      ]
    },
    period: {
      start: "2023-01-01",
      end: "2023-12-31"
    },
    payor: [
      {
        reference: "Organization/org-bluecross"
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "group"
            }
          ]
        },
        value: "GRP778899",
        name: "Blue Cross Group Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "plan"
            }
          ]
        },
        value: "PREMIUM",
        name: "Premium Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "rxbin",
              display: "RX BIN"
            }
          ]
        },
        value: "610415"
      }
    ]
  },
  {
    resourceType: "Coverage",
    id: "cov-67890",
    status: "active",
    identifier: [
      {
        system: "https://www.aetna.example.com/memberid",
        value: "MEM112233445",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MB",
              display: "Member Number"
            }
          ]
        }
      }
    ],
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "EHCPOL",
          display: "extended healthcare"
        }
      ]
    },
    subscriber: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    subscriberId: "AET11223344",
    beneficiary: {
      reference: "Patient/eq081-VQEgP8drUUqCWzHfw3"
    },
    relationship: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
          code: "self"
        }
      ]
    },
    period: {
      start: "2023-01-01",
      end: "2023-12-31"
    },
    payor: [
      {
        reference: "Organization/org-aetna"
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "group"
            }
          ]
        },
        value: "AET556677",
        name: "Aetna Group Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "plan"
            }
          ]
        },
        value: "STANDARD",
        name: "Standard Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "rxbin",
              display: "RX BIN"
            }
          ]
        },
        value: "610591"
      }
    ]
  },
  {
    resourceType: "Coverage",
    id: "cov-54321",
    status: "active",
    identifier: [
      {
        system: "https://www.cigna.example.com/policyid",
        value: "CIG123456789",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MB",
              display: "Member Number"
            }
          ]
        }
      }
    ],
    type: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-ActCode",
          code: "EHCPOL",
          display: "extended healthcare"
        }
      ]
    },
    subscriber: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    subscriberId: "CIG12345678",
    beneficiary: {
      reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3"
    },
    relationship: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
          code: "self"
        }
      ]
    },
    period: {
      start: "2023-01-01",
      end: "2023-12-31"
    },
    payor: [
      {
        reference: "Organization/org-cigna"
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "group"
            }
          ]
        },
        value: "CIG998877",
        name: "Cigna Group Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "plan"
            }
          ]
        },
        value: "GOLD",
        name: "Gold Plan"
      },
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/coverage-class",
              code: "rxbin",
              display: "RX BIN"
            }
          ]
        },
        value: "004336"
      }
    ]
  }
];

module.exports = coverages;