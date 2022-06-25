const apiRouter = require("express").Router();

// Custom Routes
const genresRouter = require("./genresRouter");
const reviewRouter = require("./reviewsRouter");


// Telling the apiRouter to use the sub routes
apiRouter.use("/genres", genresRouter);
apiRouter.use("/reviews", reviewRouter);


module.exports = apiRouter;