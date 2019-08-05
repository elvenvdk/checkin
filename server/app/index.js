const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const employees = require('./api/employees');
const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

// Routing
app.use('/employees', employees);
// Error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    type: 'error',
    message: err.message
  });
  next();
});

module.exports = app;
