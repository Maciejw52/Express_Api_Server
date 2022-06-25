const GenresModel = require("../models/GenresModel");

exports.getAllGenres = async function (req, res, next) {
  const allGenres = {};
  res.send("This is the all genres page :)");
}


exports.postSingleGenre = async function (req, res, next) {
  const genre = new GenresModel({
    genre: "Action" /* req */
  });

  try {
    const newGenre = await genre.save();
    console.log("CREATED!!!")
    res.redirect(`genres`);
  } catch {
    res.render("genres/new", {
      genre: genre,
      errorMessage: "Error creating Genre"
    });
  }

}