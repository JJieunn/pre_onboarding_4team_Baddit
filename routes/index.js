const express = require('express');
const userRouter = require('./users_get');
const router = express.Router();

router.get('/ping', (_, res) => { res.send('pong') })

router.use('/users', userRouter);

module.exports = router;
