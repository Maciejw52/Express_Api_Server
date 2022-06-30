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
    film_img:           req.body.film_img,
    genre:              req.body.genre,
    rating:             req.body.rating,
  });

  review
    .save()
    .then((newReview) => {
      res.status(200).json(newReview);
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

exports.deleteSingleReview = (req, res, next) => {
  
  const id = { _id: req.params._id };

  console.log(`Deleting Review with ID: ${id._id}`);
  
  ReviewModel.deleteOne(id)
    .then((result) => {
      res.status(202).send(`Deleted ${id._id}`)
    }).catch(next)
}