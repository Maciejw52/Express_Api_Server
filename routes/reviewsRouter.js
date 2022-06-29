const {
  getAllReviews,
  postSingleReview,
  getSingleReview
} = require("../controllers/ReviewController");

// Define the router and require the review model
const reviewsRouter = require("express").Router();

reviewsRouter
  .route("/")
  .get(getAllReviews)

reviewsRouter
  .route("/new")
  .post(postSingleReview)

reviewsRouter
  .route("/:_id")
  .get(getSingleReview)

module.exports = reviewsRouter;