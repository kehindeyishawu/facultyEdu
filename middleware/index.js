
const middleware = {
    isloggedIn : function(req, res, next) {
        if(req.isAuthenticated()){
           return next()
        }
        req.flash("error", "You must be a loggedin to do this")
        res.redirect("/login")
    },

    checkUserAchievement: function(req, res, next){
        Achievement.findById(req.params.id, (err, foundAchievement) => {
            if(err && !foundAchievement){
                req.flash("error", "Sorry that campground couldn't be found or has been Deleted!!!")
            }
        })
    }
}