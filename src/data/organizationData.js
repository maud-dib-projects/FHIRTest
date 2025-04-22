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
          "456 Secure Ave",
          "Floor 10"
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
          "use": "official",
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
          },
          {
            "system": "email",
            "value": "j.doe@securecare.example.com",
            "use": "work"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Organization",
    "id": "org-bluecross",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
      ]
    },
    "identifier": [
       {
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "1111111111" 
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
    "name": "Blue Cross Blue Shield", 
    "telecom": [
      {
        "system": "phone",
        "value": "555-111-1111",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "type": "physical",
        "line": [
          "100 Blue Cross St",
          "Building B"
        ],
        "city": "Anytown",
        "state": "CA",
        "postalCode": "90210",
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
          "text": "Provider Relations"
        },
        "name": {
          "use": "official",
          "family": "Miller",
          "given": [
            "Alice"
          ],
          "text": "Alice Miller"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "555-111-1112",
            "use": "work"
          },
          {
            "system": "email",
            "value": "a.miller@bluecross.example.com",
            "use": "work"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Organization",
    "id": "org-aetna",
    "meta": {
      "profile": [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
      ]
    },
     "identifier": [
       {
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "2222222222"
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
    "name": "Aetna",
     "telecom": [
      {
        "system": "phone",
        "value": "555-222-2222",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "type": "physical",
        "line": [
          "200 Aetna Ave",
          "Suite 50"
        ],
        "city": "Somecity",
        "state": "TX",
        "postalCode": "75001",
        "country": "USA"
      }
    ],
    "contact": [
      {
        "purpose": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
              "code": "BILL",
              "display": "Billing"
            }
          ],
          "text": "Billing Department Manager"
        },
        "name": {
          "use": "official",
          "family": "Garcia",
          "given": [
            "Robert"
          ],
          "text": "Robert Garcia"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "555-222-2223",
            "use": "work"
          },
          {
            "system": "email",
            "value": "r.garcia@aetna.example.com",
            "use": "work"
          }
        ]
      }
    ]
  },
  {
    "resourceType": "Organization",
    "id": "org-cigna",
     "meta": {
      "profile": [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
      ]
    },
    "identifier": [
       {
        "system": "http://hl7.org/fhir/sid/us-npi",
        "value": "3333333333"
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
    "name": "Cigna",
    "telecom": [
      {
        "system": "phone",
        "value": "555-333-3333",
        "use": "work"
      }
    ],
    "address": [
      {
        "use": "work",
        "type": "physical",
        "line": [
          "300 Cigna Blvd",
          "Mail Stop 12"
        ],
        "city": "Villagetown",
        "state": "FL",
        "postalCode": "33301",
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
          "text": "Customer Support Supervisor"
        },
        "name": {
          "use": "official",
          "family": "Chen",
          "given": [
            "Linda"
          ],
          "text": "Linda Chen"
        },
        "telecom": [
          {
            "system": "phone",
            "value": "555-333-3334",
            "use": "work"
          },
          {
            "system": "email",
            "value": "l.chen@cigna.example.com",
            "use": "work"
          }
        ]
      }
    ]
  }
];

module.exports = organizationData; 