// Define the router
const usersRouter = require("express").Router();

const {
  postNewUser,
  authenticateUser
} = require("../controllers/UsersController");

usersRouter
  .route("/")
  .post(authenticateUser)

usersRouter
  .route("/new")
  .post(postNewUser)



module.exports = usersRouter;