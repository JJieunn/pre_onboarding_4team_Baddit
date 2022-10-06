const express = require('express');
const router = express.Router();

const userRouter = require('./user_select.js')

router.use('/getusers', userRouter)

module.exports = router;
