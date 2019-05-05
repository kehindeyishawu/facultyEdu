const Achievement = require("../models/achievement");
const News = require("../models/news");
const middleware = {
    isLoggedIn : function(req, res, next) {
        if(req.isAuthenticated()){
           return next()
        }
        req.flash("error", "You must be a loggedin to do this")
        res.redirect("/login")
    },

    checkUserAchievement: function(req, res, next){
        Achievement.findOne(req.params.name, (err, foundAchievement) => {
            if(err || !foundAchievement){
                req.flash("error", "Sorry that Post doesn't exist or has been Deleted!!!");
                res.redirect("back")
            }else if (foundAchievement.author.id.equals(req.user._id) || req.user.isAdmin){
                
                console.log(`achievement: ${foundAchievement} requested and found`);
                next()
            }else{
                req.flash("error", "Unfortunately You Aren't Authorized To Modify This Post")
                res.redirect("back");
            }
        })
    },

    isAdmin: function(req, res, next){
        if(req.user.isAdmin){
            return next()
        }
        req.flash("error", "You are not an Admin")
        res.redirect("back")
    },

    checkUserNews: function(req, res, next){
        News.findOne(req.params.name, (err, foundNews) => {
            if(err || !foundNews){
                req.flash("error", "Sorry that Post doesn't exist or has been Deleted!!!");
                res.redirect("back")
            }else if (foundNews.author.id.equals(req.user._id) || req.user.isAdmin){
                
                console.log(`news: ${foundNews} requested and found`);
                next()
            }else{
                req.flash("error", "Unfortunately You Aren't Authorized To Modify This Post")
                res.redirect("back");
            }
        })
    }
}

module.exports = middleware;