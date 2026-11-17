const notesModel = require("../models/notes.model")

const createNotesController = async(req , res) => {
    try {
        let {title , description} = req.body
        let newNote = await notesModel.create({
            title,description
        })

        return res.status(210).json({
            message:"note created successfully",
            data:newNote
        })
    } catch (error) {
        console.log("error in create API" , error)
    }
}

module.exports = createNotesController