# Anomaly Detection Package

## Introduction

This package provides a simple anomaly detection algorithm for identifying anomalies in time series data using z-score thresholding.

## Installation

To install the package, use npm:

```
npm install anomaly-detection
```

## Usage

```javascript
const detectAnomalies = require('anomaly-detection');

// Example time series data
const data = [10, 12, 8, 14, 11, 20, 7, 9, 13, 15, 16];
// Set z-score threshold
const threshold = 2.5;

// Detect anomalies
const anomalies = detectAnomalies(data, threshold);
console.log('Anomalies detected at indices:', anomalies);
```

## Functionality

The `detectAnomalies` function takes two parameters:
- `data`: An array representing time series data.
- `threshold`: A z-score threshold for anomaly detection.

It returns an array containing the indices of anomalies detected in the provided time series data.

## License

This package is licensed under the MIT License.
