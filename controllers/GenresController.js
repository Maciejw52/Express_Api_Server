const GenreModel = require("../models/GenreModel");

exports.getAllGenres = async function (req, res, next) {
  GenreModel.find()
    .then((genres) => {
      res.status(200).json(genres)
    }).catch(next);
}

exports.search

exports.postSingleGenre = (req, res, next) => {  
  GenreModel
    .findOne({ genre: "Action" })
    .then((existingGenre) => {
      if (!existingGenre) {
        const genre = new GenreModel({
          genre: "Action" /* req */
        });

        genre
          .save()
          .then((newGenre) => {
            console.log(`${newGenre.genre} created as a genre :)`);
            res.redirect(`genres`);
          })
        
      }
    })
    .catch((next) => {
      res.render("genres/new", {
      genre: genre,
      errorMessage: "Error creating Genre"
    })
    })      
}