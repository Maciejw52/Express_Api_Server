const GenreModel = require("../models/GenreModel");

exports.getAllGenres = async function (req, res, next) {
  GenreModel.find()
    .then((genres) => {
      res.status(200).json(genres)
    }).catch(next);
}

exports.search

exports.postSingleGenre = (req, res, next) => {
  
  const newGenre = new GenreModel({
    genre: req.body.genre
  })
  
  newGenre.save()
    .then((Genrejson) => {
      res.status(200).send(`Created Genre ${Genrejson.genre}`)
      console.log(`Created Genre with ${Genrejson.genre} with ID ${Genrejson._id}`)
  }).catch(next)
  
  /*GenreModel
    .findOne({ genre: "Action" })
    .then((existingGenre) => {
      if (!existingGenre) {
        const genre = new GenreModel({
          genre: "Action"
        })

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
    })    */
}

exports.deleteSingleGenre = (req, res, next) => {
  
  const id = { _id: req.params._id };

  console.log(`Deleting Genre with ID: ${id._id}`);
  
  GenreModel.deleteOne(id)
    .then((result) => {
      res.status(202).send(`Deleted ${id._id}`)
    }).catch(next)
}
