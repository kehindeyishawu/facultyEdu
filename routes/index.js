const express = require("express");
const router  = express.Router();

router.get("/", function(req,res){
    res.render("index/home")
})
// SIGNIN/SIGNUP LOGIC
router.get("/register", (req, res) => {
    res.render("index/register")
})

router.get("/login", (req, res) => {
    res.render("index/login")
} )
router.get("/login")
// ****************************

module.exports=router;