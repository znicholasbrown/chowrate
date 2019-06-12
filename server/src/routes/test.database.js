const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

let databaseConnection = 'Waiting for Database response...';

router.get('/', (req, res, next) => {
    res.send(databaseConnection);
});

// Connecting to MongoDB
mongoose.connect('mongodb://mongodb:27017/test');

// If there is a connection error send an error message
mongoose.connection.on('error', error => {
    console.log('Database connection error:', error);
    databaseConnection = 'Error connecting to Database';
});

// If connected to MongoDB send a success message
mongoose.connection.once('open', () => {
    console.log('Connected to Database!');
    databaseConnection = 'Connected to Database';
});

module.exports = router;