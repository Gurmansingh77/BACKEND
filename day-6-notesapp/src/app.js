let express = require("express")
const connectDb = require("./congif/dbconnect")
const notesModel = require("./models/notes.model")
const createNotesController = require("./controllers/notes.controller")
let app = express()
app.use(express.json())
connectDb()
app.get("/" , (req , res) => {
    res.send("this is home page ")
})

app.post("/create" , createNotesController)

module.exports = app;