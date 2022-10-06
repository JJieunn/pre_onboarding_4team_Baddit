const express = require("express")
const router = express.Router()
const userController = require("../controllers/userupdatecontroller")

router.patch('/update/:id', userController.updateInfo)

module.exports = router;