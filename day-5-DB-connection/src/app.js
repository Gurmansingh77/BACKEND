let express = require("express");
const connectDb = require("./config/db");
const NotesModel = require("./models/noteSchema");
let app = express();
app.use(express.json())
connectDb()

app.post('/create' ,async (req , res) => {
    let { title , description } = req.body

    const newNote = await NotesModel.create({
        title,
        description
    })
    console.log(newNote)
    res.send({
        success: true,
        message:"note created successfully",
        data: newNote
    })

})

app.get("/", (req, res) => {
  res.send("this is home page");
});

module.exports = app;
