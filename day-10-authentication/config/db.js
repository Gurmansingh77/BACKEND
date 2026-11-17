const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { eventNames } = require("../server")

dotenv.config()

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongodb connected successfully")
}

module.exports = connectDB