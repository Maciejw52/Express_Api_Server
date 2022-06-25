const GenreModel = require("../models/GenreModel");
const ReviewModel = require("../models/ReviewModel");

exports.getAllReviews = async function (req, res, next) {
  ReviewModel.find()
    .then((genres) => {
      res.status(200).json(genres)
    }).catch(next);
}

exports.postSingleReview = (req, res, next) => {
  let review = new ReviewModel({
    film_title:         "Batman",
    header:             "Very Nice",
    owner:              "Maciej",
    review_body:        "Sed in nulla euismod augue vestibulum varius. Vivamus maximus, libero vel convallis tristique, mauris lectus pulvinar urna, nec mattis lorem arcu non tellus. Vestibulum nulla quam, maximus sit amet sapien ut, convallis vehicula urna. Curabitur in odio at tellus fermentum consectetur. Cras et tempus arcu. Maecenas quis erat tristique, rutrum nisl a, pellentesque tortor. Nullam vel lorem diam. Praesent erat est, tempus vel lectus in, porttitor egestas odio. Nunc rhoncus commodo interdum. Aliquam volutpat eu odio eleifend dapibus. Duis sed justo ante. Nunc vel enim quam. Vestibulum sit amet purus quis mi volutpat tincidunt. Aliquam erat volutpat. Vestibulum consequat nibh purus. Quisque rutrum pharetra eleifend. Proin feugiat feugiat elit, vitae condimentum augue aliquam volutpat. Vestibulum et erat metus. Aliquam et neque consectetur, vulputate ante ut, varius massa. Integer mollis mi ut ex volutpat mattis. Sed sollicitudin convallis mollis. Duis pharetra leo id blandit placerat. In augue magna, facilisis in purus imperdiet, convallis vehicula nunc. Nulla ultricies nulla non urna ultrices dictum. Maecenas accumsan lobortis dictum.",
    review_img_name:    "SOME_URL",
    genre:              "62b7440d951fd9b1890d696a",
    votes:              10,
    rating:             5
    /*_id:                req.body._id,*/
  })

  review
    .save()
    .then((newReview) => {
      res.status(201).json(newReview)
    })
    .catch(next);
}


/* 
    film_title:         req.body.film_title,
    header:             req.body.header,
    owner:              req.body.owner,
    review_body:        req.body.review_body,
    review_img_name:    req.body.review_img_name,
    genre:              req.body.genre,
    votes:              req.body.votes,
    rating:             req.body.rating
    _id:                req.body._id,

    */