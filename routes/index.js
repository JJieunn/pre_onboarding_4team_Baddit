const express = require('express');
const router = express.Router();

const recordsUserGetRouter = require('./records');
const recordsGetRouter = require('./records_get');
const user = require('./user');

router.use(recordsUserGetRouter);
router.use(recordsGetRouter);
router.use('/users', user);

module.exports = router;
