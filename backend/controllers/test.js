const test = require("../models/test")

const addStocks = async(req, res) => {
        console.log("hello this api is working");
    const data = req.body;
    console.log(data, "incoming data");

    if (data === undefined) {
        return res.status(400).json({ msg: "riskScore is required" });
    }

    try {
    const addData = await test.create(data);
        res.status(200).json({msg: "Data Added Successfully", addData});
    } catch (error) {
        res.status(500).json({error, msg: "Internal Server Error"});
        console.log(error);
    }
}

const getStocks = async (req,res) =>{
    const {id} = req.params;

    // console.log(id)


    // console.log(req.params)

    try {
        const data = await test.findOne({riskScore: id});
        if(data){
        res.status(200).json({msg: "Data Loaded Successfully", data});}
        else{
            res.status(200).json({msg: "No data found"});
        }
    } catch (error) {
        res.status(500).json({error, msg: "Internal Server Error"});
    }
}



module.exports = { addStocks, getStocks};