// requiring and configing dotenv
require("dotenv").config()

// requiring index
// const http = require('http');
const express                     = require("express");
const app                         =   express();
const methodOverride              =   require("method-override");
const bodyParser                  = require("body-parser");
const mongoose                    = require("mongoose");
const passport                    = require("passport");
const LocalStrategy               = require("passport-local");
const passportLocalMongoose       = require("passport-local-mongoose");
const flash                       = require("connect-flash");
// ********************************
// REQUIRING MODELS
const User = require("./models/user")
// *************************
// requiring routes
const indexRoute = require("./routes/index")
const achievementRoute = require("./routes/achievement")

// ***********************************

// App config
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({extended: true}));
// *****************

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "good",
  resave: false,
  saveUninitialized: false
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// ****************************

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// using routes
app.use(indexRoute);
app.use(achievementRoute);
// app.use(newsRoute)
// *********************
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  });
