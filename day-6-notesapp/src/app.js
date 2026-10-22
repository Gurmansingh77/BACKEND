let express = require("express")
const connectDb = require("./congif/dbconnect")
const notesModel = require("./models/notes.model")
let app = express()
app.use(express.json())
connectDb()
app.get("/" , (req , res) => {
    res.send("this is home page ")
})

app.post("/create" , async(req , res) => {
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
})

module.exports = app;