# FHIR Demo API

A simple Node.js API that follows FHIR standards for healthcare data with Auth0 authentication. This API returns canned responses for demonstration and testing purposes.

## Overview

This API provides endpoints that follow the FHIR (Fast Healthcare Interoperability Resources) standard for healthcare data. It is designed to return pre-defined sample data for testing and demonstration purposes.

## Authentication

This API uses Auth0 for authentication. All endpoints require a valid JWT access token.

### Auth0 Setup

1. Create a free Auth0 account at https://auth0.com
2. Create a new API in the Auth0 dashboard
3. Set the Identifier (audience) to `https://fhir-demo-api`
4. Update the `.env` file with your Auth0 domain and audience

## Available Endpoints

### Patients

- GET `/api/v1/Patient` - Get all patients
- GET `/api/v1/Patient/:id` - Get a specific patient by ID

### Medication Dispenses

- GET `/api/v1/MedicationDispense` - Get all medication dispenses
- GET `/api/v1/MedicationDispense?patient=:patientId` - Get medication dispenses for a specific patient
- GET `/api/v1/MedicationDispense/:id` - Get a specific medication dispense by ID

### Observations (Labs & Assessments)

- GET `/api/v1/Observation` - Get all observations
- GET `/api/v1/Observation?patient=:patientId` - Get observations for a specific patient
- GET `/api/v1/Observation?category=laboratory` - Get laboratory observations
- GET `/api/v1/Observation?category=assessment` - Get assessment observations
- GET `/api/v1/Observation/:id` - Get a specific observation by ID

### Coverage

- GET `/api/v1/Coverage` - Get all coverage resources
- GET `/api/v1/Coverage?patient=:patientId` - Get coverage resources for a specific patient
- GET `/api/v1/Coverage/:id` - Get a specific coverage resource by ID

## Sample Patient IDs

The API includes sample data for the following patients:

- `patient-001`: John Smith
- `patient-002`: Emily Johnson
- `patient-003`: Miguel Garcia

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and update with your Auth0 credentials
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. For development with auto-restart: `npm run dev`

## Testing the API

You'll need to obtain a valid access token from Auth0 before you can make requests to the API. You can use the Auth0 dashboard to create a test application and generate tokens for testing.

Example request using cURL:

```bash
curl -X GET \
  http://localhost:3000/api/v1/Patient \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

## License

MIT