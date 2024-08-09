// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Dummy Data (Simulating Vehicle Movement)
let vehicleRoute = [
  { latitude: 17.385044, longitude: 78.486671, timestamp: "2024-07-20T10:00:00Z" },
  { latitude: 17.385046, longitude: 78.486673, timestamp: "2024-07-20T10:00:05Z" },
  { latitude: 17.385048, longitude: 78.486675, timestamp: "2024-07-20T10:00:10Z" },
  { latitude: 17.385050, longitude: 78.486677, timestamp: "2024-07-20T10:00:15Z" },
  // Add more initial data points here if needed
];

app.get('/api/vehicle-location', (req, res) => {
  // Simulate new data by shifting the route and adding a new point
  if (vehicleRoute.length > 10) {
    vehicleRoute.shift(); // Remove the oldest data
  }
  
  const lastPoint = vehicleRoute[vehicleRoute.length - 1];
  const newPoint = {
    latitude: lastPoint.latitude + 0.00001,
    longitude: lastPoint.longitude + 0.00001,
    timestamp: new Date().toISOString()
  };

  vehicleRoute.push(newPoint);
  
  res.json(vehicleRoute);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
