const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userId: Number,
    Name: String,
    PhoneNumber: Number,
    EmailId: String,
    CreatedAt: Date,
    UpdateAt: Date
})

module.exports = mongoose.model("user", userSchema, "Users");