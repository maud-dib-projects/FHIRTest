/**
 * Sample observation data following FHIR R4 standard
 * Includes laboratory observations for Lupus patients
 */
const observations = [
  // Patient 1 (Lopez) - Initial Visit
  {
    resourceType: "Observation",
    id: "obs-lab-lopez-1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/erXuFYUfucBZaryVksYEcMg3" },
    effectiveDateTime: "2023-01-15T08:30:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lopez-2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/erXuFYUfucBZaryVksYEcMg3" },
    effectiveDateTime: "2023-01-15T08:30:00Z",
    valueQuantity: { value: 85, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lopez-3",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "4625-0", display: "Complete Blood Count" }] },
    subject: { reference: "Patient/erXuFYUfucBZaryVksYEcMg3" },
    effectiveDateTime: "2023-01-15T08:30:00Z",
    valueString: "Abnormal - Leukopenia noted",
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "L", display: "Low" }] }]
  },

  // Patient 2 (Lin) - Initial Visit
  {
    resourceType: "Observation",
    id: "obs-lab-lin-1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/eq081-VQEgP8drUUqCWzHfw3" },
    effectiveDateTime: "2023-03-20T09:15:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lin-2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/eq081-VQEgP8drUUqCWzHfw3" },
    effectiveDateTime: "2023-03-20T09:15:00Z",
    valueQuantity: { value: 65, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lin-3",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "4625-0", display: "Complete Blood Count" }] },
    subject: { reference: "Patient/eq081-VQEgP8drUUqCWzHfw3" },
    effectiveDateTime: "2023-03-20T09:15:00Z",
    valueString: "Normal",
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "N", display: "Normal" }] }]
  },

  // Patient 3 (Powell) - Initial Visit
  {
    resourceType: "Observation",
    id: "obs-lab-powell-1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3" },
    effectiveDateTime: "2023-05-10T10:00:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-powell-2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3" },
    effectiveDateTime: "2023-05-10T10:00:00Z",
    valueQuantity: { value: 95, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-powell-3",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "4625-0", display: "Complete Blood Count" }] },
    subject: { reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3" },
    effectiveDateTime: "2023-05-10T10:00:00Z",
    valueString: "Abnormal - Thrombocytopenia noted",
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "L", display: "Low" }] }]
  },

  // Follow-up observations for Patient 1 (Lopez)
  {
    resourceType: "Observation",
    id: "obs-lab-lopez-fu1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/erXuFYUfucBZaryVksYEcMg3" },
    effectiveDateTime: "2023-04-15T08:30:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lopez-fu2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/erXuFYUfucBZaryVksYEcMg3" },
    effectiveDateTime: "2023-04-15T08:30:00Z",
    valueQuantity: { value: 70, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },

  // Follow-up observations for Patient 2 (Lin)
  {
    resourceType: "Observation",
    id: "obs-lab-lin-fu1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/eq081-VQEgP8drUUqCWzHfw3" },
    effectiveDateTime: "2023-06-20T09:15:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-lin-fu2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/eq081-VQEgP8drUUqCWzHfw3" },
    effectiveDateTime: "2023-06-20T09:15:00Z",
    valueQuantity: { value: 55, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },

  // Follow-up observations for Patient 3 (Powell)
  {
    resourceType: "Observation",
    id: "obs-lab-powell-fu1",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "56540-8", display: "Anti-nuclear antibody (ANA) panel" }] },
    subject: { reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3" },
    effectiveDateTime: "2023-07-10T10:00:00Z",
    valueQuantity: { value: 1, unit: "titer", system: "http://unitsofmeasure.org", code: "titer" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  },
  {
    resourceType: "Observation",
    id: "obs-lab-powell-fu2",
    status: "final",
    category: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/observation-category", code: "laboratory", display: "Laboratory" }] }],
    code: { coding: [{ system: "http://loinc.org", code: "51500-8", display: "Anti-double stranded DNA antibody" }] },
    subject: { reference: "Patient/eAB3mDIBBcyUKviyzrxsnAw3" },
    effectiveDateTime: "2023-07-10T10:00:00Z",
    valueQuantity: { value: 85, unit: "IU/mL", system: "http://unitsofmeasure.org", code: "IU/mL" },
    interpretation: [{ coding: [{ system: "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation", code: "H", display: "High" }] }]
  }
];

module.exports = observations;