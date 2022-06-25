





// Require express and set the PORT of the 
const express = require("express");
const server = express();
const port = process.env.PORT || 8000;


// listen on port 8000 by default
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

module.exports = server;