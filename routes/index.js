const express = require('express');
const router = express.Router();

const recordsGetRouter = require('./records_get');

router.use(recordsGetRouter);
module.exports = router;
