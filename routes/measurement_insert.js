const express = require('express');
const measurementController = require('../controllers/measurement_insert');

const router = express.Router();

router.post('', measurementController.measurementInsert);

module.exports = router;