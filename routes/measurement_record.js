const express = require('express');
const measurementRecordController = require('../controllers/measurement_record');

const router = express.Router();

router.post('', measurementRecordController.measurementInsert);
router.delete('/:record_id', measurementRecordController.measurementDelete);
router.get('/recordsget/:userId/:recordId', measurementRecordController.getRecords);
router.get('/records/:userId', measurementRecordController.getUserRecords)

module.exports = router;