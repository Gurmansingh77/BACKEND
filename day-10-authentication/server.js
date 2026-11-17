const connectDB = require("./config/db")
const app = require("./src/app")

connectDB()
const port = 3000
app.listen(port , () => {
    console.log("server is running")
})
module.exports = app