const express = require('express');
const getUsers = require('../controllers/users_get')
const signup = require('../controllers/signup');
const deleteuser = require('../controllers/deleteuser');

const router = express.Router();

router.get('/list', getUsers.getUsers);
router.post('/signup', signup.signup);
router.patch('/:userId', deleteuser.deleteuser);

module.exports = router;
