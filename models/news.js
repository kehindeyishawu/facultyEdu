const mongoose = require("mongoose");

let NewsSchema = new mongoose.Schema({
    name: String,
    image: String,
    imageID: String,
    description: String,
    date: {type: Date, default: Date.now},
    headImg: {type: String, default:""},
    CreatedBy: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        user: String
    }
})

module.exports = mongoose.model("News", NewsSchema);