const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:[10 , "minimum 10 characters are required"]
    }
})

const notesModel = mongoose.model("notes" , noteSchema)
module.exports = notesModel