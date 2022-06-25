// Use this to create new categories
const mongoose = require("mongoose");

// Create a Schema
const GenreSchema = new mongoose.Schema({
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Genre", GenreSchema)