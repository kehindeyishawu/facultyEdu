const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")


// let UserSchema = new mongoose.Schema({
//     username: String,
//     firstName: String,
//     lastName: String,
//     password: String,
//     isAdmin: {type: Boolean, default: false},
//     userCreated: {type: Date, default: Date.now}
// });

let UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    avatar: String,
    firstName: String,
    lastName: String,
    userCreated: {type: Date, default: Date.now},
    email: {type: String, unique: true, required: true},
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isAdmin: {type: Boolean, default: false}
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);