const { getAllReviews, postSingleReview } = require("../controllers/ReviewController");

// Define the router and require the review model
const reviewsRouter = require("express").Router();

reviewsRouter
  .route("/")
  .get(getAllReviews)

reviewsRouter
  .route("/new")
  .post(postSingleReview)


module.exports = reviewsRouter;