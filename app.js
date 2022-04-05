//jshint esversion: 6

const express = require("express");
const https = require("https");

const app = express();


app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

// set up homepage as sign up
app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", function(req, res) {


    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});