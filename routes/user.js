const express = require('express');
const signup = require('../controllers/signup');
const deleteuser = require('../controllers/deleteuser');

const router = express.Router();

router.post('/signup', signup.signup);
router.patch('/:userId', deleteuser.deleteuser);

module.exports = router;
