const express = require('express');
const router = express.Router();

const user = require('./user');
const recordsUserGetRouter = require('./records');
const recordsGetRouter = require('./records_get');

router.use('/users', user);
router.use(recordsGetRouter);
router.use(recordsUserGetRouter);


module.exports = router;