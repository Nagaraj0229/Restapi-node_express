/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const { sendErrorResponse } = require('./services/utils/response.utils');
const { logger } = require('./services/utils/logger.utils');
const userRoutes = require('./services/routes/users');

// app & server declare
const app = express();
const PORT = 5000;

// routes & json body declare
app.use(bodyParser.json());
app.use('/users', userRoutes);

// general for req&res error responses
app.use((err, _req, res, _next) => {
  sendErrorResponse(res, err.message);
  logger.error(err.message);
});

// get list for the users
app.get('/', (_req, res) => {
  res.send('hello world!');
  logger.Response('GET request to /');
});

// server part
app.listen(PORT, () => {
  logger.Response(`Server running on port:${PORT}`);
});
