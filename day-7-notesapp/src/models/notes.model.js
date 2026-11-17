const mongoose = require("mongoose")

// this is schema which defines the structure and the rules for the data
const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        minlength:[20 , "minimum 20 characters are requires"],
        require:true
    }
})

// this is model made through mongoose which help to perform function on the data in database according to the schema   
const notesModel = mongoose.model("notes" , notesSchema)
module.exports = notesModel