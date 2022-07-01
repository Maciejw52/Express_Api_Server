// Use this to create new categories
const mongoose = require("mongoose");

// Create a Schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model("User", UserSchema)