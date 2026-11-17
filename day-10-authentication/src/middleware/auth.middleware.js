const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")
const dotenv = require("dotenv")

dotenv.config()

const authenticate = async (req , res , next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message:"Token not found"
        })
    }

    const data = jwt.verify(token , process.env.JWT_SECRET)
    const user = await userModel.findById(data.id)

    req.user = user
    next()
}

module.exports = authenticate 