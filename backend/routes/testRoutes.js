const express = require("express");
const { addStocks, getStocks } = require("../controllers/test");

const router = express.Router();

router.post("/add-stocks", addStocks);


router.get("/get-stocks/:id", getStocks);

module.exports = router





