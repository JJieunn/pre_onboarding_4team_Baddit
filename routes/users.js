
const express = require('express');
const usersController = require ("../controllers/users");

const router = express.Router();

router.post('/signup', usersController.signup);
router.patch('/:userId', usersController.deleteuser);
router.get('/list', usersController.getUsers);
router.get('/select', usersController.selectInfo)
router.patch('/update/:id', usersController.updateInfo)

module.exports = router;
