const express = require("express")
const router = express.Router()
const userController = require("../controllers/userselectcontroller")

router.get('/select', userController.selectInfo)

module.exports = router;