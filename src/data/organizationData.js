const organizationData = [
  {
    "resourceType": "Organization",
    "id": "inscomp1",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
      ]
    },
    "identifier": [
      {
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "1234567890" 
      }
    ],
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "ins",
            "display": "Insurance Company"
          }
        ]
      }
    ],
    "name": "HealthFirst Insurance",
    "telecom": [
      {
        "system": "phone",
        "value": "555-123-4567",
        "use": "work"
      },
      {
        "system": "fax",
        "value": "555-123-4568",
        "use": "work"
      },
      {
        "system": "email",
        "value": "info@healthfirst.example.com",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "type": "physical",
        "line": [
          "123 Health St",
          "Suite 400" 
        ],
        "city": "Metropolis",
        "state": "NY",
        "postalCode": "10001",
        "country": "USA"
      }
    ],
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "ADMIN", 
              "display": "Administrative"
            }
          ],
          "text": "Benefits Specialist" 
        },
        "name": {
          "family": "Smith",
          "given": [
            "Jane"
          ],
          "text": "Jane Smith"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "555-987-6543",
            "use": "work"
          },
          {
            "system": "email",
            "value": "j.smith@healthfirst.example.com",
            "use": "work"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Organization",
    "id": "inscomp2",
     "meta": {
      "profile": [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
      ]
    },
    "identifier": [
       {
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "9876543210" 
      }
    ],
    "active": true,
    "type": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "ins",
            "display": "Insurance Company"
          }
        ]
      }
    ],
    "name": "SecureCare Plans",
    "telecom": [
      {
        "system": "phone",
        "value": "555-555-5555",
        "use": "work"
      },
      {
        "system": "email",
        "value": "contact@securecare.example.com",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "type": "physical",
        "line": [
          "456 Secure Ave" 
        ],
        "city": "Gotham",
        "state": "NJ",
        "postalCode": "07001",
        "country": "USA"
      }
    ],
     "contact": [
      {
        "purpose": {
           "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "PATINF", 
              "display": "Patient Information"
            }
          ],
          "text": "Member Services Lead" 
        },
        "name": {
          "family": "Doe",
          "given": [
            "John"
          ],
          "text": "John Doe"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "555-555-5556",
            "use": "work"
          }
        ]
      }
    ]
  }
];

module.exports = organizationData; 