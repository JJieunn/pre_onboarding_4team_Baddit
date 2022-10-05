const { Router } = require('express');
const router = Router();
const { getRecords } = require('../controllers/records_get');

router.get('/recordsget/:userId/:recordId', getRecords);

module.exports = router;
