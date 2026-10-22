const { default: mongoose, model } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
    "mongodb+srv://guri003op_db_user:gurman2008@mycluster.lhm9sj2.mongodb.net/",
  );
  console.log("mongodb connected")
  } catch (error) {
    console.log("error from connectDb" , error)
  }
};

module.exports = connectDb;