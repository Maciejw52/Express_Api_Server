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
  review_img_name: { /* REVIEW IMAGE URL */
    type: String,
    required: false
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId, /* REVIEW GENRE */
    required: true,
    ref: "Genre"
  },
  created_at: { /* REVIEW created at */
    type: Date,
    required: true,
    default: Date.now
  },
  votes: { /* REVIEW VOTES FROM PUBLIC ( AGREE/DISAGREE ) */
    type: Number
  },
  rating: { /* REVIEW RATING GIVEN BY  */
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Review", reviewSchema)

/*
  film_title:
  header: ,
  owner: ,
  review_body: ,
  review_img_name: ,
  genre: ,
  votes:  ,
  rating:  
*/