const express = require('express');
const router = express.Router();

const recordsUserGetRouter = require('./records');
const recordsGetRouter = require('./records_get');

router.use(recordsUserGetRouter);
router.use(recordsGetRouter);

module.exports = router;
