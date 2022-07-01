const UserModel = require("../models/UsersModel");

exports.postNewUser = (req, res, next) => {
  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password
  })

  console.log(req.body)

  // Check for duplicate usernames
  //const duplicate = UserModel.findOne({username: newUser.username})
  
  //if (duplicate === null) return res.sendStatus(409);

  try {
    newUser.save()
    .then((UserJson) => {
      res.status(201).send(`Created User ${UserJson.username}`)
      console.log(`Created Genre with ${UserJson.username} with ID ${UserJson._id}`)
    }).catch(next)

  } catch (error) {
    res.status(404).json({ "message": error.message });
  }
}

exports.authenticateUser = (req, res, next) => {
  const newUser = new UserModel({
    username: req.body.username,
    password: req.body.password
  })

  UserModel.findOne({ username: newUser.username }).then((result) => {
    // res is null if user not found

    if (result !== null) {
      console.log(`Authenticated user ${newUser.username}`);
      res.sendStatus(200)
    } else {
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