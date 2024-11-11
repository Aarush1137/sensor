// Replace these variables with your MQTT broker details
const broker = 'mqtt-dashboard.com'; // MQTT broker address
const port = 8000; // WebSockets port (use 8083 for secure WebSockets)
const topic = 'fall_detection/alerts'; // MQTT topic to subscribe to

// MQTT broker authentication credentials
const username = 'Aarush';
const password = '12345689';

// Create a client instance
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

// Use Paho.Client
const client = new Paho.Client(broker, port, clientId);

// Set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// Connect the client with authentication
client.connect({
  onSuccess: onConnect,
  onFailure: onFailure,
  userName: username,
  password: password,
  useSSL: false // Set to true if using secure WebSockets
});

// Called when the client connects
function onConnect() {
  console.log('Connected to MQTT broker');
  // Subscribe to the topic
  client.subscribe(topic);
}

// Called when the client fails to connect
function onFailure(responseObject) {
  console.error('Failed to connect:', responseObject.errorMessage);
}

// Called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.error('Connection lost:', responseObject.errorMessage);
    // Reconnect after a delay
    setTimeout(() => {
      client.connect({
        onSuccess: onConnect,
        onFailure: onFailure,
        userName: username,
        password: password,
        useSSL: false
      });
    }, 5000);
  }
}

// Called when a message arrives
function onMessageArrived(message) {
  console.log('Message arrived:', message.payloadString);
  const data = JSON.parse(message.payloadString);
  displayAlert(data);
}

// Function to display the alert on the webpage
function displayAlert(data) {
  const alertsDiv = document.getElementById('alerts');
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert';

  const alertTitle = document.createElement('h2');
  alertTitle.textContent = data.alert || 'Alert';

  const alertTime = document.createElement('p');
  const currentTime = new Date().toLocaleString();
  alertTime.textContent = 'Time: ' + currentTime;

  alertDiv.appendChild(alertTitle);
  alertDiv.appendChild(alertTime);

  if (data.latitude && data.longitude) {
    const alertLocation = document.createElement('p');
    alertLocation.innerHTML = `Location: <a href="https://www.google.com/maps?q=${data.latitude},${data.longitude}" target="_blank">${data.latitude}, ${data.longitude}</a>`;
    alertDiv.appendChild(alertLocation);
  }

  // Add the new alert to the top
  alertsDiv.insertBefore(alertDiv, alertsDiv.firstChild);
}
function callEmergency() {
    window.location.href = "tel:+911"; // Replace with actual emergency number
 }
 
 function sendSOS() {
    // Implement sending SOS functionality here (e.g., send to server)
    console.log("SOS message sent!");
 }
 
 // Function to fetch nearby hospitals based on user's location
 function fetchNearbyHospitals(latitude, longitude) {
    // Example API call (replace with actual API)
    const apiUrl = `https://api.example.com/hospitals?lat=${latitude}&lng=${longitude}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayHospitals(data))
        .catch(error => console.error('Error fetching hospitals:', error));
 }
 function callEmergency() {
    // Dial the Senior Citizen Helpline Number
    window.location.href = "tel:14567";
}
 
 // Function to display nearby hospitals
 function displayHospitals(hospitals) {
    const hospitalsDiv = document.getElementById('hospitals');
    hospitalsDiv.innerHTML = '<h2>Nearby Hospitals</h2>';
    
    hospitals.forEach(hospital => {
        const hospitalDiv = document.createElement('div');
        hospitalDiv.className = 'hospital';
        hospitalDiv.innerHTML = `<p>${hospital.name} - ${hospital.address}</p>`;
        hospitalsDiv.appendChild(hospitalDiv);
    });
 }
 
 const userLatitude = 12.9716; // Example latitude
 const userLongitude = 77.5946; // Example longitude
 fetchNearbyHospitals(userLatitude, userLongitude);
 function callEmergency() {
    // Dial the Senior Citizen Helpline Number
    window.location.href = "tel:14567";
 }
 
 function sendSOS() {
    const message = "Help! Jagrat has fallen";
    const phoneNumber = "7722890254";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
 }
 
 // Function to fetch nearby hospitals based on user's location
 function fetchNearbyHospitals(latitude, longitude) {
    // Example API call (replace with actual API)
    const apiUrl = `https://api.example.com/hospitals?lat=${latitude}&lng=${longitude}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayHospitals(data))
        .catch(error => console.error('Error fetching hospitals:', error));
 }
 
 // Function to display nearby hospitals
 function displayHospitals(hospitals) {
    const hospitalsDiv = document.getElementById('hospitals');
    hospitalsDiv.innerHTML = '<h2>Nearby Hospitals</h2>';
    
    hospitals.forEach(hospital => {
        const hospitalDiv = document.createElement('div');
        hospitalDiv.className = 'hospital';
        hospitalDiv.innerHTML = `<p>${hospital.name} - ${hospital.address}</p>`;
        hospitalsDiv.appendChild(hospitalDiv);
    });
 }
