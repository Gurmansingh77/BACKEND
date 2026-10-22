const express = require('express')
const app = express()
app.use(express.json())

let port  = 3000

let user = []

// create
app.post('/create' , (req , res) => {
    let body = req.body
    user.push(body)
    res.send(user)
})


// GET it means when someone send request on / it will send users as response 
app.get('/' , (req , res) => {
    console.log(req)
    res.send(user)
})

app.listen(port , (req , res) => {
    console.log('app is running')
})


    