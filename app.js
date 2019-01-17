var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public")); //for custom style sheet
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	res.render("index");
});

app.get("/sections/new", function(req, res){
	res.render("new");
});


app.listen(8080, function(){
    console.log("Website has started");
});