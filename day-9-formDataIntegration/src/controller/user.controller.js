const createController = async(req , res) => {
    res.send(req.body)
    console.log(req.body)
} 

module.exports = createController