const express = require("express");
const router  = express.Router();
const User  = require("../models/user");
const passport = require("passport")



router.get("/", function(req,res){
    res.render("index/home")
})
router.get("/redirect", () => {
    res.redirect("back")
});
// SIGNIN/SIGNUP LOGIC
router.get("/register", (req, res) => {
    res.render("index/register")
})
router.post("/register", function(req, res){
    const newUser = new User({username: req.body.username});
    if(req.body.adminCode === "access123") {
      newUser.isAdmin = true;
    }
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("index/register", {error: err.message});
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Successfully Signed Up! Nice to meet you " + req.body.username);
           res.redirect("/");
        });
    });
});

// // login form
router.get("/login", (req, res) => {
    res.render("index/login")
} )
router.post("/login", passport.authenticate("local", 
{
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: `Welcome Back`
}), (req, res) => {
});

// logout route
router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Successfully Signed Out! See You Later");
    res.redirect("/");
});
// // ****************************

module.exports=router;