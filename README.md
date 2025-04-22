# FHIR Demo API

A simple Node.js API demonstrating FHIR standards with canned responses. Ideal for testing applications that consume FHIR data.

**What it provides:**

*   Sample data for FHIR R4 resources: Patients, MedicationDispenses, Observations, Coverage.
*   Basic API endpoints to retrieve this data.

## 🚀 Getting Started

1.  **Clone:**
    ```bash
    git clone <repository-url> # Replace <repository-url> with the actual URL
    cd FHIRTest # Or the relevant directory name
    ```

2.  **Install Dependencies:** (Requires Node.js and npm)
    ```bash
    npm install
    ```

3.  **Run:**
    ```bash
    npm run start
    or 
    npm run dev
    ```
    The API will run on `http://localhost:3000`, port can be changed with `.env` file.

## 🛠️ Updating Sample Data

The canned responses are sourced from JavaScript files in the `src/data/` directory. Three patients are included with IDs and names that match EPIC sandbox patients.

1.  **Locate Data Files:** Find the relevant file (e.g., `src/data/patients.js`).
2.  **Edit:** Modify the JavaScript arrays within these files. Each object in the array represents a FHIR resource. You can add, remove, or modify these objects. Ensure you maintain valid JavaScript syntax and FHIR structure.
3.  **Restart Server:** Stop (`Ctrl+C`) and restart (`npm start`) the server for changes to take effect.

## ℹ️ Available API Endpoints

*   `/api/v1/Patient`: Get all patients
*   `/api/v1/Patient/:id`: Get a specific patient by ID
*   `/api/v1/MedicationDispense`: Get all medication dispenses
*   `/api/v1/MedicationDispense?patient=:patientId`: Get dispenses for a specific patient
*   `/api/v1/MedicationDispense/:id`: Get a specific dispense by ID
*   `/api/v1/Observation`: Get all observations
*   `/api/v1/Observation?patient=:patientId`: Get observations for a specific patient
*   `/api/v1/Observation?category=laboratory`: Get laboratory observations
*   `/api/v1/Observation?category=assessment`: Get assessment observations
*   `/api/v1/Observation/:id`: Get a specific observation by ID
*   `/api/v1/Coverage`: Get all coverage resources
*   `/api/v1/Coverage?patient=:patientId`: Get coverage for a specific patient
*   `/api/v1/Coverage/:id`: Get a specific coverage resource by ID

*(Replace `:id` and `:patientId` with actual IDs)*

## License

MIT