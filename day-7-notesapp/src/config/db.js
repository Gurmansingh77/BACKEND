const mongoose = require("mongoose")

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.mongodb_uri)
        console.log("database connected")
    } catch (error) {
        console.log("error while connecting DB" , error)
    }
}

module.exports = connectDb