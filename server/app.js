const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');

// Middleware to parse JSON bodies

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());

// Use routes from routes.js
app.use('/api', routes);

module.exports = app;
