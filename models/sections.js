var mongoose = require("mongoose");
var sectionsSchema = new mongoose.Schema({
    subject: String,
    courseNum: String,
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Students"
        }
    ],
    day: String,
    startingTime: String    
});

module.exports = mongoose.model("Sections", sectionsSchema);