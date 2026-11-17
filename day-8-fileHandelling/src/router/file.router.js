const express = require("express")
const upload = require("../config/multer")

const router = express.Router()

router.post("/" , upload.single("image") , (req , res) => {
    try {
        let file = req.file
        console.log(file)
         res.status(201).json({
            message:"file recieved successfully"
        })
    } catch (error) {
        console.log(error)
         
        return res.status(500).json({
            message:"internal server error"
        })
    }
})

module.exports = router