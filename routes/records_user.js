const express = require('express');
const router = express.Router();

const { getUserRecords } = require('../controllers/records_user');

router.get('/records', getUserRecords)

module.exports = router;