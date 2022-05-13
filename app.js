const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


const aboutmatter="this is a test to check basic knowledge";
const homematter="this is a home page";


app.get("/", function(req, res) {
  res.render("home", {
    intro: homematter,
  });
});


app.get("/about", function(req, res) {
  res.render("about", {
    aboutpage: aboutmatter,
  });
});

app.listen(3000,function(){
  console.log("running");
});
