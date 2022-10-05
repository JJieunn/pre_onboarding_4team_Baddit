const express = require('express');
const router = express.Router();

const recordsUserGetRouter = require('./records_user');

router.use(recordsUserGetRouter);

module.exports = router;
