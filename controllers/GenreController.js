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
  // If Genre exists 
  GenreModel.findOne({ genre: newGenre.genre }).then((resultFromSearch) => {
    // If username already exists we exit
    if (resultFromSearch !== null) {
      console.log(`Cannot create genre: Genre <${newGenre.genre}> already exists.`);
      res.sendStatus(409)
    } else {
      newGenre.save().then((newUser) => {
        console.log(`Created Genre with ${Genrejson.genre} with ID ${Genrejson._id}`)
        res.sendStatus(200)
      }).catch(next);
    }
  })
}

exports.deleteSingleGenre = (req, res, next) => {
  
  const id = { _id: req.params._id };

  console.log(`Deleting Genre with ID: ${id._id}`);
  
  GenreModel.deleteOne(id)
    .then((result) => {
      res.status(202).send(`Deleted ${id._id}`)
    }).catch(next)
}
