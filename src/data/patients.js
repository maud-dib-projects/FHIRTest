/**
 * Sample patient data following FHIR R4 standard
 */
const patients = [
  {
    resourceType: 'Patient',
    id: 'patient-001',
    identifier: [
      {
        system: 'http://example.org/fhir/mrn',
        value: 'MRN12345'
      }
    ],
    active: true,
    name: [
      {
        use: 'official',
        family: 'Smith',
        given: ['John', 'Adam']
      }
    ],
    telecom: [
      {
        system: 'phone',
        value: '555-123-4567',
        use: 'home'
      },
      {
        system: 'email',
        value: 'john.smith@example.com'
      }
    ],
    gender: 'male',
    birthDate: '1970-01-25',
    address: [
      {
        use: 'home',
        line: ['123 Main St'],
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA'
      }
    ]
  },
  {
    resourceType: 'Patient',
    id: 'patient-002',
    identifier: [
      {
        system: 'http://example.org/fhir/mrn',
        value: 'MRN67890'
      }
    ],
    active: true,
    name: [
      {
        use: 'official',
        family: 'Johnson',
        given: ['Emily', 'Rose']
      }
    ],
    telecom: [
      {
        system: 'phone',
        value: '555-987-6543',
        use: 'mobile'
      },
      {
        system: 'email',
        value: 'emily.johnson@example.com'
      }
    ],
    gender: 'female',
    birthDate: '1985-08-12',
    address: [
      {
        use: 'home',
        line: ['456 Oak Avenue'],
        city: 'Springfield',
        state: 'IL',
        postalCode: '67890',
        country: 'USA'
      }
    ]
  },
  {
    resourceType: 'Patient',
    id: 'patient-003',
    identifier: [
      {
        system: 'http://example.org/fhir/mrn',
        value: 'MRN54321'
      }
    ],
    active: true,
    name: [
      {
        use: 'official',
        family: 'Garcia',
        given: ['Miguel']
      }
    ],
    telecom: [
      {
        system: 'phone',
        value: '555-456-7890',
        use: 'home'
      },
      {
        system: 'email',
        value: 'miguel.garcia@example.com'
      }
    ],
    gender: 'male',
    birthDate: '1992-04-30',
    address: [
      {
        use: 'home',
        line: ['789 Pine Street'],
        city: 'Lakeside',
        state: 'TX',
        postalCode: '34567',
        country: 'USA'
      }
    ]
  }
];

module.exports = patients;