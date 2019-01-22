var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Sections = require("./models/sections.js"),
Students = require("./models/students.js");
mongoose.connect("mongodb://localhost/tutoring_app", {useNewUrlParser: true});


app.set("view engine", "ejs");
app.use(express.static("public")); //for custom style sheet
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/index", function(req, res){
    res.render("index");
});

app.get("/sections/new", function(req, res){
    res.render("newSection");
});


app.get("/students/new", function(req, res){
	res.render("newStudent");
});


app.post("/sections", function(req, res){
    Sections.create(req.body.section, function(err, newSection){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/index");
        }
    });
});

app.listen(8080, function(){
    console.log("Website has started");
});