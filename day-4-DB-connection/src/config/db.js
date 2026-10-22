const mongoose = require("mongoose");


const connectDb = async () => {
    try {
        await mongoose.connect(
        "mongodb+srv://guri003op_db_user:gurman2008@mycluster.lhm9sj2.mongodb.net/mydatabase"
    );

    console.log("MongoDB connected");
    } catch (error) {
        console.log('error while connecting mongoDb' , error)
    }
};

module.exports = connectDb