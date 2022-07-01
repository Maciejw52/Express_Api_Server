// Define the router
const usersRouter = require("express").Router();

const {
  postNewUser,
  authenticateUser
} = require("../controllers/UsersController");

usersRouter
  .route("/new")
  .post(postNewUser)

usersRouter
  .route("/")
  .post(authenticateUser)

module.exports = usersRouter;