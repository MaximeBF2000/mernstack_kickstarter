const mongoose = require("mongoose")
require("dotenv").config()

const connect_db = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to mongoDB database !")
  } catch(err){
    console.error(err)
  }
}

module.exports = connect_db