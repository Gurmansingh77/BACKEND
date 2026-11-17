const express = require("express")
const cors = require("cors")
const notesModel = require("./models/notes.model")
const createNotesController = require("./controllers/notes.controller")
const notesRoutes =  require("./routes/notes.routes")


let app = express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.get("/" , (req , res) => {
    res.send("hellooo")
})

app.use('/notes' , notesRoutes)



module.exports = app