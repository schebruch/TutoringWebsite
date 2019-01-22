var mongoose = require("mongoose");

var studentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    LIN: String,
    athlete: Boolean    
});

module.exports = mongoose.model("Students", studentsSchema);