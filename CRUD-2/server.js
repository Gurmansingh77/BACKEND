let express = require("express")
let app = express()
app.use(express.json())

let port = 3000
let users = []


// GET - READ
app.get("/" , (req , res) => {
    res.send(users)
})

app.post("/create" , (req , res) => {
    let body = req.body
    users.push(body)
    res.send("user saved successfully")
})

// DELETE
app.delete("/delete/:id" , (req , res) => {
    let { id } = req.params
    let userData = users.filter((val) => {
        return  val.id !== id
    })
    console.log(userData)
    user = userData
    res.send(userData)
})


app.listen(port , () => {
    console.log("server is runnig")

})