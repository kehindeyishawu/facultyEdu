// requiring file
const express = require("express");
const router = express.Router();
const Achievement = require("../models/achievement")
const middleware = require("../middleware");
// const {isLoggedIn, checkU} = m
// ************************************
// requiring multer & cloudinary, then configing them
var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
  cloud_name: 'kkenny', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});
// *******************************************

router.get("/achievement", (req, res) => {
  Achievement.find({}, (err, allachievements) => {
    if(err || !allachievements){
      req.flash("error", err.message);
      return res.redirect("/")
    }
    res.render("achievement/index", {achievement : allachievements})
  })
})

router.get("/achievement/new", (req, res) => {
  res.render("achievement/new")
})

//CREATE - add new campground to DB
router.post("/achievement", middleware.isLoggedIn, upload.single('image'), function(req, res) {
  cloudinary.v2.uploader.upload(req.file.path, function(err, result) {
    if(err) {
      req.flash('error', err.message);
      return res.redirect('back');
    }
    // add cloudinary url for the image to the campground object under image property
    req.body.achievement.image = result.secure_url;
    // add image's public_id to campground object
    req.body.achievement.imageId = result.public_id;
    // add author to campground
    req.body.achievement.author = {
      id: req.user._id,
      username: req.user.username
    }
    Achievement.create(req.body.achievement, function(err, achievement) {
      if (err) {
        req.flash('error', err.message);
        return res.redirect('back');
      }
      res.redirect('/achievement');
    });
  });
});





// router.put  add upload.single('image'), to edit route
// router.put("/achievement/:id", upload.single('image'), (req,res) => {
//   if(req.file){
//     cloudinary.v2.uploader.destroy(campground.image._id, function(result) {
//   }
// } )


module.exports = router;
