const express = require('express');
const router = express.Router();

const users = require('./users');
const measurementRecords = require('./measurement_record');
// const recordsUserGetRouter = require('./records');
// const recordsGetRouter = require('./records_get');
// const userRouter = require('./user_select.js')
// const userUpdate = require('./user_update.js')

router.use('/users', users);
router.use('/records', users);
// router.use(recordsGetRouter);
// router.use(recordsUserGetRouter);
// router.use('/getusers', userRouter)
// router.use('/updateusers', userUpdate)


module.exports = router;

