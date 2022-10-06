const express = require('express');
const usersGetRouter = require('./users_get');
const recordsGetRouter = require('./records_get');
const router = express.Router();

router.use('/users', usersGetRouter);
router.use(recordsGetRouter);


module.exports = router;
