const express = require('express');
const router = express.Router();

const { getUserRecords } = require('../controllers/records');

router.get('/records/:userId', getUserRecords)

module.exports = router;