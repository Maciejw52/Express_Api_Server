const UserModel = require("../models/UsersModel");


/*

    USER CREATION

*/
exports.postNewUser = (req, res, next) => {
  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })

  // If user exists 
  UserModel.findOne({ username: newUser.username }).then((resultFromSearch) => {

    // If username already exists we exit
    if (resultFromSearch !== null) {
      console.log(`Cannot create user: User <${newUser.username}> already exists.`);
      res.sendStatus(409)
      
    } else {
      newUser.save().then((newUser) => {
        console.log(`Created new user ${newUser}`)
        res.sendStatus(200)
      }).catch(next);
    }

  })
}



/*

    USER LOGIN

*/
exports.authenticateUser = (req, res, next) => {
  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password
  })

  UserModel.findOne({ username: newUser.username }).then((result) => {
    // res is null if user not found
    console.log(`RESULT : ${result}`)
    if (result !== null) {
      console.log(`Authenticated user ${newUser.username}`);
      res.sendStatus(200)
    } else {
      console.log(`User does not exist: ${newUser.username}`)
      res.sendStatus(401)
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