/**
 * Sample coverage data following FHIR R4 standard
 */
const coverages = [
  {
    resourceType: "Coverage",
    id: "cov-12345",
    status: "active",
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
        value: "BCGROUP123",
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
      }
    ]
  },
  {
    resourceType: "Coverage",
    id: "cov-67890",
    status: "active",
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
        value: "AETGRP456",
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
      }
    ]
  },
  {
    resourceType: "Coverage",
    id: "cov-54321",
    status: "active",
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
        value: "CIGGRP789",
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
      }
    ]
  }
];

module.exports = coverages;