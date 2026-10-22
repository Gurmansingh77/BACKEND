let http = require('http')
console.log(http)

let server = http.createServer((req , res) => {
    console.log('hello i am server');
    res.end("ok i listen to your request")
})

server.listen(3000, () => {
    console.log('server is running on port 3000....')
})