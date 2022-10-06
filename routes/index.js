const express = require('express');
const router = express.Router();

const users = require('./users');
const measurementRecords = require('./measurement_record');

router.use('/users', users);
router.use('/records', measurementRecords);

module.exports = router;

