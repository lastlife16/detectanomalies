const detectAnomalies = require('anomaly-detection');

// Example time series data
const data = [10, 12, 8, 14, 11, 20, 7, 9, 13, 15, 16];
// Set z-score threshold
const threshold = 2.5;

// Detect anomalies
const anomalies = detectAnomalies(data, threshold);
console.log('Anomalies detected at indices:', anomalies);
