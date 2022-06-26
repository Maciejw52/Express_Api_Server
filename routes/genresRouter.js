// Define the router
const genresRouter = require("express").Router();

const {
  getAllGenres,
  postSingleGenre,
  deleteSingleGenre
} = require("../controllers/GenreController");

genresRouter
  .route("/")
  .get(getAllGenres)

genresRouter
  .route("/new")
  .post(postSingleGenre)

genresRouter
  .route("/:_id")
  .delete(deleteSingleGenre)

module.exports = genresRouter;