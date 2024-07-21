const mongoose = require("mongoose");


const connectDB = async(req, res) =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected", connect.connection.host);
    } catch (error) {
        console.log(error, "from db");
    }
}

module.exports = connectDB;