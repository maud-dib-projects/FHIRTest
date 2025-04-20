/**
 * FHIR Patient Details Handler
 * Fetches and displays detailed patient information from the FHIR API
 */

// Main function to initialize patient details
async function initPatientDetails() {
  // Get patient ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get('id');
  
  if (!patientId) {
    showError('No patient ID provided');
    return;
  }
  
  try {
    // Fetch patient data
    const patient = await fetchPatientData(patientId);
    
    // Render patient information
    renderPatientDetails(patient);
    
    // Fetch and render related observations
    fetchRelatedObservations(patientId);
    
    // Fetch and render medication dispenses
    fetchMedicationDispenses(patientId);
  } catch (error) {
    console.error('Error loading patient details:', error);
    showError('Failed to load patient details');
  }
}

// Fetch patient data from the API
async function fetchPatientData(patientId) {
  const response = await fetch(`/api/v1/Patient/${patientId}`);
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return await response.json();
}

// Fetch related observations
async function fetchRelatedObservations(patientId) {
  try {
    const response = await fetch(`/api/v1/Observation?patient=${patientId}`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    renderObservations(data);
  } catch (error) {
    console.error('Error fetching observations:', error);
    const container = document.getElementById('related-observations');
    container.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Related Observations</h2>
      <p class="text-gray-500">No observation data available.</p>
    `;
  }
}

// Fetch medication dispenses
async function fetchMedicationDispenses(patientId) {
  try {
    const response = await fetch(`/api/v1/MedicationDispense?patient=${patientId}`);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    renderMedications(data);
  } catch (error) {
    console.error('Error fetching medications:', error);
    const container = document.getElementById('related-medications');
    container.innerHTML = `
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Medication Dispenses</h2>
      <p class="text-gray-500">No medication data available.</p>
    `;
  }
}

// Display error message
function showError(message) {
  const container = document.getElementById('patient-details');
  container.innerHTML = `
    <div class="p-6 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h2 class="text-xl font-semibold text-gray-800 mb-2">Error</h2>
      <p class="text-gray-600">${message}</p>
      <a href="/" class="inline-block mt-4 text-indigo-600 hover:underline">Return to Home</a>
    </div>
  `;
}

// Render patient details
function renderPatientDetails(data) {
  const container = document.getElementById('patient-details');
  
  // Format patient name
  const patientName = formatPatientName(data);
  
  // Format address
  const address = formatAddress(data.address && data.address[0]);
  
  // Format contact information
  const contactInfo = formatContactInfo(data.telecom);
  
  // Build patient details HTML
  container.innerHTML = `
    <h2 class="text-2xl font-bold text-gray-800 mb-6">${patientName}</h2>
    
    <div class="grid md:grid-cols-2 gap-x-8 gap-y-4">
      <div>
        <h3 class="text-lg font-semibold text-gray-700">Patient Information</h3>
        <dl class="mt-2 space-y-2">
          <div>
            <dt class="text-sm font-medium text-gray-500">Patient ID</dt>
            <dd class="text-sm text-gray-900">${data.id || 'N/A'}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">Gender</dt>
            <dd class="text-sm text-gray-900">${formatGender(data.gender)}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">Birth Date</dt>
            <dd class="text-sm text-gray-900">${formatDate(data.birthDate)}</dd>
          </div>
          <div>
            <dt class="text-sm font-medium text-gray-500">Active Status</dt>
            <dd class="text-sm text-gray-900">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${data.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                ${data.active ? 'Active' : 'Inactive'}
              </span>
            </dd>
          </div>
        </dl>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold text-gray-700">Contact Details</h3>
        <dl class="mt-2 space-y-2">
          ${contactInfo}
          ${address ? `
          <div>
            <dt class="text-sm font-medium text-gray-500">Address</dt>
            <dd class="text-sm text-gray-900">${address}</dd>
          </div>
          ` : ''}
        </dl>
      </div>
    </div>
    
    <div class="mt-6 pt-6 border-t border-gray-200">
      <h3 class="text-lg font-semibold text-gray-700">Identifiers</h3>
      <ul class="mt-2 space-y-2">
        ${formatIdentifiers(data.identifier)}
      </ul>
    </div>
    
    <div class="mt-6 text-right">
      <a href="/api/v1/Patient/${data.id}" class="text-sm text-indigo-600 hover:text-indigo-900" target="_blank">
        View Raw FHIR Data
      </a>
    </div>
  `;
}

// Render observations
function renderObservations(data) {
  const container = document.getElementById('related-observations');
  
  // Clear loading state
  container.innerHTML = '<h2 class="text-xl font-semibold text-gray-800 mb-4">Related Observations</h2>';
  
  if (!data.entry || data.entry.length === 0) {
    container.innerHTML += '<p class="text-gray-500">No observation data available.</p>';
    return;
  }
  
  // Create list of observations
  const ul = document.createElement('ul');
  ul.className = 'divide-y divide-gray-200';
  
  data.entry.slice(0, 5).forEach(entry => {
    const observation = entry.resource;
    const li = document.createElement('li');
    li.className = 'py-3';
    
    // Format the observation
    const code = observation.code?.coding?.[0]?.display || 'Unknown Observation';
    const value = formatObservationValue(observation);
    const date = observation.effectiveDateTime ? new Date(observation.effectiveDateTime).toLocaleDateString() : 'Unknown Date';
    
    li.innerHTML = `
      <div class="flex justify-between">
        <div class="text-sm font-medium text-gray-900">${code}</div>
        <div class="text-sm text-gray-500">${date}</div>
      </div>
      <div class="mt-1 text-sm text-gray-600">${value}</div>
    `;
    
    ul.appendChild(li);
  });
  
  container.appendChild(ul);
  
  // Add view all link if there are more than 5 observations
  if (data.entry.length > 5) {
    const viewAllLink = document.createElement('div');
    viewAllLink.className = 'mt-4 text-right';
    viewAllLink.innerHTML = `
      <a href="/api/v1/Observation?patient=${data.entry[0].resource.subject.reference.split('/')[1]}" class="text-sm text-indigo-600 hover:text-indigo-900">
        View All (${data.entry.length})
      </a>
    `;
    container.appendChild(viewAllLink);
  }
}

// Render medications
function renderMedications(data) {
  const container = document.getElementById('related-medications');
  
  // Clear loading state
  container.innerHTML = '<h2 class="text-xl font-semibold text-gray-800 mb-4">Medication Dispenses</h2>';
  
  if (!data.entry || data.entry.length === 0) {
    container.innerHTML += '<p class="text-gray-500">No medication data available.</p>';
    return;
  }
  
  // Create list of medications
  const ul = document.createElement('ul');
  ul.className = 'divide-y divide-gray-200';
  
  data.entry.slice(0, 5).forEach(entry => {
    const medication = entry.resource;
    const li = document.createElement('li');
    li.className = 'py-3';
    
    // Format the medication information
    const medName = medication.medicationCodeableConcept?.coding?.[0]?.display || 'Unknown Medication';
    const status = medication.status ? medication.status.charAt(0).toUpperCase() + medication.status.slice(1) : 'Unknown';
    const date = medication.whenHandedOver ? new Date(medication.whenHandedOver).toLocaleDateString() : 'Unknown Date';
    
    li.innerHTML = `
      <div class="flex justify-between">
        <div class="text-sm font-medium text-gray-900">${medName}</div>
        <div class="text-sm text-gray-500">${date}</div>
      </div>
      <div class="mt-1 text-sm text-gray-600">Status: ${status}</div>
    `;
    
    ul.appendChild(li);
  });
  
  container.appendChild(ul);
  
  // Add view all link if there are more than 5 medications
  if (data.entry.length > 5) {
    const viewAllLink = document.createElement('div');
    viewAllLink.className = 'mt-4 text-right';
    viewAllLink.innerHTML = `
      <a href="/api/v1/MedicationDispense?patient=${data.entry[0].resource.subject.reference.split('/')[1]}" class="text-sm text-indigo-600 hover:text-indigo-900">
        View All (${data.entry.length})
      </a>
    `;
    container.appendChild(viewAllLink);
  }
}

// Helper function to format patient name
function formatPatientName(patient) {
  if (!patient.name || !patient.name[0]) {
    return 'Unknown Patient';
  }
  
  const name = patient.name[0];
  const givenNames = name.given ? name.given.join(' ') : '';
  const familyName = name.family || '';
  
  return `${givenNames} ${familyName}`.trim();
}

// Helper function to format address
function formatAddress(address) {
  if (!address) return null;
  
  const parts = [];
  
  if (address.line && address.line.length > 0) {
    parts.push(address.line.join(', '));
  }
  
  if (address.city) {
    parts.push(address.city);
  }
  
  if (address.state) {
    parts.push(address.state);
  }
  
  if (address.postalCode) {
    parts.push(address.postalCode);
  }
  
  if (address.country) {
    parts.push(address.country);
  }
  
  return parts.join(', ');
}

// Helper function to format contact info
function formatContactInfo(telecom) {
  if (!telecom || telecom.length === 0) {
    return '<div><dt class="text-sm font-medium text-gray-500">Contact</dt><dd class="text-sm text-gray-900">No contact information available</dd></div>';
  }
  
  let contactHtml = '';
  
  const phone = telecom.find(t => t.system === 'phone');
  if (phone) {
    contactHtml += `
      <div>
        <dt class="text-sm font-medium text-gray-500">Phone</dt>
        <dd class="text-sm text-gray-900">${phone.value} (${phone.use || 'primary'})</dd>
      </div>
    `;
  }
  
  const email = telecom.find(t => t.system === 'email');
  if (email) {
    contactHtml += `
      <div>
        <dt class="text-sm font-medium text-gray-500">Email</dt>
        <dd class="text-sm text-gray-900">${email.value}</dd>
      </div>
    `;
  }
  
  return contactHtml || '<div><dt class="text-sm font-medium text-gray-500">Contact</dt><dd class="text-sm text-gray-900">No contact information available</dd></div>';
}

// Helper function to format gender
function formatGender(gender) {
  if (!gender) return 'Unknown';
  
  // Capitalize first letter
  return gender.charAt(0).toUpperCase() + gender.slice(1);
}

// Helper function to format date
function formatDate(dateString) {
  if (!dateString) return 'Unknown';
  
  // Format date
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

// Helper function to format identifiers
function formatIdentifiers(identifiers) {
  if (!identifiers || identifiers.length === 0) {
    return '<li class="text-sm text-gray-500">No identifiers available</li>';
  }
  
  return identifiers.map(identifier => `
    <li class="text-sm">
      <span class="font-medium text-gray-500">${identifier.system.split('/').pop()}: </span>
      <span class="text-gray-900">${identifier.value}</span>
    </li>
  `).join('');
}

// Helper function to format observation value
function formatObservationValue(observation) {
  if (observation.valueQuantity) {
    return `${observation.valueQuantity.value} ${observation.valueQuantity.unit || ''}`;
  } else if (observation.valueString) {
    return observation.valueString;
  } else if (observation.valueCodeableConcept) {
    return observation.valueCodeableConcept.coding?.[0]?.display || 'Coded Value';
  } else if (observation.valueBoolean !== undefined) {
    return observation.valueBoolean ? 'Yes' : 'No';
  } else if (observation.valueDateTime) {
    return new Date(observation.valueDateTime).toLocaleString();
  } else if (observation.component && observation.component.length > 0) {
    // Handle component-based observations (like BP)
    return observation.component.map(comp => {
      const name = comp.code?.coding?.[0]?.display || '';
      const value = comp.valueQuantity ? `${comp.valueQuantity.value} ${comp.valueQuantity.unit || ''}` : '';
      return `${name}: ${value}`;
    }).join(', ');
  }
  
  return 'No value recorded';
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', initPatientDetails); 