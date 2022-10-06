const express = require('express');
const usersGetRouter = require('./users_get');
const recordsUserGetRouter = require('./records');
const recordsGetRouter = require('./records_get');
const router = express.Router();

router.use('/users', usersGetRouter);
router.use(recordsGetRouter);
router.use(recordsUserGetRouter);



module.exports = router;
