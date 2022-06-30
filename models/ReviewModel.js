// Use this to create new categories
const mongoose = require("mongoose");

// Create a Schema for the reviews with all the different attributes for a single review
const reviewSchema = new mongoose.Schema({
  film_title: { /* FILM TITLE */
    type: String,
    required: true,
  },
  header: { /* REVIEW TITLE */
    type: String,
    required: true
  },
  owner: { /* REVIEW AUTHOR */
    type: String,
    required: true,
    default: "Anon"
  },
  review_body: { /* REVIEW DESCRIPTION */
    type: String,
    required: true
  },
  film_img: { /* REVIEW IMAGE URL */
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: true,
    default: "None"
  },
  created_at: { /* REVIEW created at */
    type: Date,
    required: true,
    default: Date.now
  },
  votes: { /* REVIEW VOTES FROM PUBLIC ( AGREE/DISAGREE ) */
    type: Number,
    required: true,
    default: 0
  },
  rating: { /* REVIEW RATING GIVEN BY  */
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Review", reviewSchema)