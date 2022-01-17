const mongoose = require("mongoose");
const multer   = require("multer");

const contectSchema = new mongoose.Schema({
        name : String,
        emaill: String,
        number: Number,
        budget: String,
        message: String,
        filepath:String
});

module.exports = mongoose.model("Contectdetail", contectSchema);