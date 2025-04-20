/**
 * Sample coverage data following FHIR R4 standard
 */
const coverages = [
  // Patient 001 Coverage
  {
    resourceType: 'Coverage',
    id: 'coverage-001',
    status: 'active',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'EHCPOL',
          display: 'extended healthcare'
        }
      ],
      text: 'Health Insurance'
    },
    subscriber: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    beneficiary: {
      reference: 'Patient/patient-001',
      display: 'John Smith'
    },
    relationship: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship',
          code: 'self',
          display: 'Self'
        }
      ]
    },
    period: {
      start: '2023-01-01',
      end: '2023-12-31'
    },
    payor: [
      {
        display: 'Blue Cross Blue Shield'
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'group',
              display: 'Group'
            }
          ]
        },
        value: 'BCS-GOLD-01',
        name: 'Blue Cross Gold Plan'
      },
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'plan',
              display: 'Plan'
            }
          ]
        },
        value: 'BCS-GOLD-01-001',
        name: 'Family Plan'
      }
    ]
  },
  
  // Patient 002 Coverage
  {
    resourceType: 'Coverage',
    id: 'coverage-002',
    status: 'active',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'EHCPOL',
          display: 'extended healthcare'
        }
      ],
      text: 'Health Insurance'
    },
    subscriber: {
      reference: 'Patient/patient-002',
      display: 'Emily Johnson'
    },
    beneficiary: {
      reference: 'Patient/patient-002',
      display: 'Emily Johnson'
    },
    relationship: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship',
          code: 'self',
          display: 'Self'
        }
      ]
    },
    period: {
      start: '2023-01-01',
      end: '2023-12-31'
    },
    payor: [
      {
        display: 'Aetna'
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'group',
              display: 'Group'
            }
          ]
        },
        value: 'AET-SILVER-02',
        name: 'Aetna Silver Plan'
      },
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'plan',
              display: 'Plan'
            }
          ]
        },
        value: 'AET-SILVER-02-001',
        name: 'Individual Plan'
      }
    ]
  },
  
  // Patient 003 Coverage
  {
    resourceType: 'Coverage',
    id: 'coverage-003',
    status: 'active',
    type: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
          code: 'EHCPOL',
          display: 'extended healthcare'
        }
      ],
      text: 'Health Insurance'
    },
    subscriber: {
      reference: 'Patient/patient-003',
      display: 'Miguel Garcia'
    },
    beneficiary: {
      reference: 'Patient/patient-003',
      display: 'Miguel Garcia'
    },
    relationship: {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/subscriber-relationship',
          code: 'self',
          display: 'Self'
        }
      ]
    },
    period: {
      start: '2023-01-01',
      end: '2023-12-31'
    },
    payor: [
      {
        display: 'United Healthcare'
      }
    ],
    class: [
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'group',
              display: 'Group'
            }
          ]
        },
        value: 'UHC-PREMIUM-03',
        name: 'UnitedHealthcare Premium Plan'
      },
      {
        type: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/coverage-class',
              code: 'plan',
              display: 'Plan'
            }
          ]
        },
        value: 'UHC-PREMIUM-03-002',
        name: 'Family Plus Plan'
      }
    ]
  }
];

module.exports = coverages;