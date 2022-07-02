const UserModel = require("../models/UsersModel");
const bcrypt = require("bcrypt");


/*

    USER CREATION

*/
exports.postNewUser = (req, res, next) => {

  // Check if passwords are the same
  if (req.body.password.valueOf() !== req.body.passwordCheck.valueOf()) {
    res.sendStatus(418)
  } else {
  // If user exists 
    UserModel.findOne({ username: req.body.username }).then((resultFromSearch) => {



      // If username already exists we exit
      if (resultFromSearch !== null) {
        console.log(`Cannot create user: User <${req.body.username}> already exists.`);
        res.sendStatus(409)
      } else {
        // If new user:

        const salt = 10
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = new UserModel({
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email
        });

        newUser.save().then((newUser) => {
          console.log(`Created new user ${newUser}`)
          res.sendStatus(200)
        }).catch(next);
      }
    })
  }
}



/*

    USER LOGIN

*/
exports.authenticateUser = (req, res, next) => {
  const usernameFromClient = req.body.username;

  UserModel.findOne({ username: usernameFromClient }).then((result) => {
    // res is null if user not found
    if (result !== null) {

      //Checking hashed password
      const checkPassword = bcrypt.compareSync(req.body.password, result.password)
      
      if (checkPassword) {
        console.log(`Authenticated user ${usernameFromClient}`);
        res.sendStatus(200)
      } else {
        console.log(`Incorrect password provided for ${usernameFromClient}`);
        res.sendStatus(401)
      }

    } else {
      console.log(`User does not exist: ${usernameFromClient}`)
      res.sendStatus(404)
    }

  })
}


/* Out of use for now*/
exports.deleteUser = (req, res, next) => {
  
  const id = { _id: req.params._id };

  console.log(`Deleting User with ID: ${id._id}`);
  
  GenreModel.deleteOne(id)
    .then((result) => {
      res.status(202).send(`Deleted ${id._id}`)
    }).catch(next)
}