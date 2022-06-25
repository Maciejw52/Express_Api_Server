// Setup for when this server goes live on a hosting servic
// Usign private env variables
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

// Require express and set the PORT of the 
const express = require("express");
const server = express();

const cors = require("cors");
server.use(cors());
const port = process.env.PORT || 7000;


// setup database mongoose and establish connection 
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

// check for connection to database
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => { console.log("Connected to Mongoose db :>") });

// apiRouter
const apiRouter = require("./routes/apiRouter");
server.use("/api", apiRouter)


// listen on port 7000 by default
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = server;