const express = require("express")
const createController = require("../controller/user.controller")
const upload = require("../config/multer.config")
const router = express.Router()

router.post("/create" , upload.single("profile") , createController )

module.exports = router