const { Router } = require('express');
const router = Router();
const { getRecords } = require('../controllers/records_get');

router.get('/recordsget/:userId', getRecords);

module.exports = router;
