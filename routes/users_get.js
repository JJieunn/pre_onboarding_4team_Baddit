const express = require('express');
const getUsers = require('../controllers/users_get')
const router = express.Router();

router.get('/ping', (_, res) => { res.send('pong') })
router.get('/users', getUsers.getUsers)


module.exports = router;