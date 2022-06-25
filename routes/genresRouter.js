// Define the router
const genresRouter = require("express").Router();

const {
  getAllGenres, postSingleGenre
} = require("../controllers/GenresController");

genresRouter
  .route("/")
  .get(getAllGenres)

genresRouter
  .route("/new")
  .post(postSingleGenre)

module.exports = genresRouter;