const { Router } = require('express');
const router = Router();
const { getRecords } = require('../controllers/records_get');

router.post('/recordsget', getRecords);
module.exports = router;
