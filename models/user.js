const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    userCreated: {type: Date, default: Date.Now}
})