const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
    riskScore:{type: Number},
    nigerianStocks: {type: Number},
    foreignStocks: {type: Number},
    techStocks: {type: Number},
    emergingStocks: {type: Number},
    nigerianBonds: {type: Number},
    foreignBonds: {type: Number},
    commodities: {type: Number},
    realEstate: {type: Number},
    tBills: {type: Number},
    alternative: {type: Number}
},{
    timestamps: true
})

const test = mongoose.model("test", testSchema);

module.exports = test;