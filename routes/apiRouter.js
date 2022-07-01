const apiRouter = require("express").Router();

// Custom Routes
const genresRouter = require("./genresRouter");
const reviewRouter = require("./reviewsRouter");
const usersRouter = require("./usersRouter");

// Telling the apiRouter to use the sub routes
apiRouter.use("/genres", genresRouter);
apiRouter.use("/reviews", reviewRouter);
apiRouter.use("/users", usersRouter);


module.exports = apiRouter;