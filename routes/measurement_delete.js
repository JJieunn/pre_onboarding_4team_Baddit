const express = require('express');
const measurementDelete11 = require('../controllers/measurement_delete');
const router = express.Router();

router.delete('/:record_id', measurementDelete11.measurementDelete);

module.exports = router;