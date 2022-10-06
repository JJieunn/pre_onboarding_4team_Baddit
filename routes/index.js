const express = require('express');
const router = express.Router();

const recordsUserGetRouter = require('./records');

router.use(recordsUserGetRouter);

module.exports = router;
