// Use this to create new categories
const mongoose = require("mongoose");

// Create a Schema
const GenresSchema = new mongoose.Schema({
    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Genre", GenresSchema)