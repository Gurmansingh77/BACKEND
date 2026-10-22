// let http = require("http")

// let port = 3000
// let server = http.createServer( (req , res) => {
//     console.log("i am server")
//     res.end("hello i am running")
// })

// server.listen(port , (req , res) => {
//     console.log("i am running at port 3000")
// })

let express = require("express")
let app = express()

let port = 3000

app.get('/' , (req , res) => {
    res.send("i am home page")
})
app.listen(port , (req , res) => {
    console.log("app is running")
})