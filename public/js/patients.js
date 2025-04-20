/**
 * FHIR Patient Data Handler
 * Fetches and displays patient data from the FHIR API
 */

// Main function to initialize patient data display
async function initPatientDirectory() {
  const patientContainer = document.getElementById('patient-container');
  
  try {
    // Show loading state
    renderLoadingState(patientContainer);
    
    // Fetch patient data
    const data = await fetchPatientData();
    
    // Render the patient data
    renderPatientTable(data, patientContainer);
  } catch (error) {
    console.error('Error loading patient data:', error);
    renderErrorState(patientContainer);
  }
}

// Fetch patient data from the API
async function fetchPatientData() {
  const response = await fetch('/api/v1/Patient');
  
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  
  return await response.json();
}

// Render loading state
function renderLoadingState(container) {
  container.innerHTML = `
    <div class="animate-pulse p-4">
      <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  `;
}

// Render error state
function renderErrorState(container) {
  container.innerHTML = `
    <div class="p-4 text-center text-red-500">
      <p>Could not load patient data.</p>
      <p class="text-sm">Please check the API status or try again later.</p>
    </div>
  `;
}

// Render patient table
function renderPatientTable(data, container) {
  // Clear the container
  container.innerHTML = '';
  
  // Check if there are patients in the data
  if (!data.entry || data.entry.length === 0) {
    container.innerHTML = `
      <div class="p-4 text-center text-gray-500">
        No patient data available
      </div>
    `;
    return;
  }
  
  // Create a table to display patient information
  const table = document.createElement('table');
  table.className = 'min-w-full divide-y divide-gray-200';
  
  // Create table header
  const thead = document.createElement('thead');
  thead.className = 'bg-gray-50';
  thead.innerHTML = `
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Patient ID
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Gender
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  `;
  table.appendChild(thead);
  
  // Create table body
  const tbody = document.createElement('tbody');
  tbody.className = 'bg-white divide-y divide-gray-200';
  
  // Add each patient to the table
  data.entry.forEach((entry, index) => {
    const patient = entry.resource;
    const tr = document.createElement('tr');
    tr.className = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
    
    // Format the name
    const name = formatPatientName(patient);
    
    // Format the gender
    const gender = formatGender(patient.gender);
    
    // Extract patient ID
    const patientId = patient.id || '';
    
    tr.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        ${patientId}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${name}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ${gender}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
        <a href="/patient-details.html?id=${patientId}" class="text-indigo-600 hover:text-indigo-900">
          View Details
        </a>
        <a href="/api/v1/Patient/${patientId}" class="text-gray-500 hover:text-gray-700" target="_blank">
          Raw JSON
        </a>
      </td>
    `;
    
    tbody.appendChild(tr);
  });
  
  table.appendChild(tbody);
  container.appendChild(table);
}

// Format patient name
function formatPatientName(patient) {
  if (!patient.name || !patient.name[0]) {
    return 'Unknown';
  }
  
  const name = patient.name[0];
  const givenNames = name.given ? name.given.join(' ') : '';
  const familyName = name.family || '';
  
  return `${givenNames} ${familyName}`.trim();
}

// Format gender
function formatGender(gender) {
  if (!gender) return 'Unknown';
  
  // Capitalize first letter
  return gender.charAt(0).toUpperCase() + gender.slice(1);
}

// Initialize patient directory when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPatientDirectory); 