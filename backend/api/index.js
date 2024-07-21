const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("../db/db");
const cors = require('cors');

const testRoutes = require("../routes/testRoutes");


dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("/api", testRoutes)

const port = process.env.PORT || 3500;

app.listen(port, ()=>{
    console.log("Server is running on port", port);
})
