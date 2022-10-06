const express = require('express');
const router = express.Router();

const user = require('./user');
const recordsUserGetRouter = require('./records');
const recordsGetRouter = require('./records_get');
const userRouter = require('./user_select.js')
const userUpdate = require('./user_update.js')

router.use('/users', user);
router.use(recordsGetRouter);
router.use(recordsUserGetRouter);
router.use('/getusers', userRouter)
router.use('/updateusers', userUpdate)


module.exports = router;

