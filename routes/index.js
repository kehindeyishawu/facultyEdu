const express = require("express");
const router  = express.Router();

router.get("/", function(req,res){
    res.render("index/home")
})
router.get("/login", (req, res) => {
    res.render("index/login")
} )

module.exports=router;