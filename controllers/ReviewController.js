const ReviewModel = require("../models/ReviewModel");

exports.getAllReviews = async function (req, res, next) {
  ReviewModel.find()
    .then((genres) => {
      res.status(200).json(genres)
    }).catch(next);
}

exports.postSingleReview = (req, res, next) => {
  let review = new ReviewModel({
    film_title:         req.body.film_title,
    header:             req.body.header,
    owner:              req.body.owner,
    review_body:        req.body.review_body,
    review_img_name:    req.body.review_img_name,
    genre:              req.body.genre,
    rating:             req.body.rating,
  });

  console.log(review);

  review
    .save()
    .then((newReview) => {
      res.status(201).json(newReview)
    })
    .catch(next);
}

exports.getSingleReview = (req, res, next) => {
  const id = { _id: req.params._id };

  console.log(id)

  ReviewModel.findById(id)
    .then((review) => {
      res.status(202).json(review)
  }).catch(next)
}