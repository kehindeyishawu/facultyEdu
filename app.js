// requiring index
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const express = require("express");
const app       =   express();
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
// ********************************

// requiring routes
const indexRoute = require("./routes/index")

// ***********************************

const url = process.env.EDU || "mongodb://localhost:27017/faculty_edu";
// App config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
mongoose.connect(url, {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
// *****************

// using routes
app.use("/", indexRoute)
// *********************

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });