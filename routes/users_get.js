const express = require('express');
const getUsers = require('../controllers/users_get')
const router = express.Router();

router.get('/list', getUsers.getUsers)
//router.get('/list?filter', getUsers.getActiveUsers)

module.exports = router;