const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    isAdmin: {type: Boolean, default: false},
    userCreated: {type: Date, default: Date.now}
})
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema)