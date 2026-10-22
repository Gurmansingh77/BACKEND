// let http = require('http')
// let server = http.createServer((req , res) => {
//    if(req.url === '/users'){
//      res.end('i am in user page')
//    }
//    if(req.url === '/home'){
//      res.end('i am in home page')
//    }
//    if(req.url === '/cart'){
//      res.end('i am in cart page')
//    }
// })

// server.listen(3000 , () => {
//     console.log('server is running')
// })

const express = require("express")
const app = express()

app.get('/' , (req , res) => {
    res.send('you get it')
})
app.get('/products' , (req , res) => {
    res.send('you get in products page')
})

let port = 3000
app.listen(port  , (req , res) => {
    console.log(`app is running on port ${port}`)
})