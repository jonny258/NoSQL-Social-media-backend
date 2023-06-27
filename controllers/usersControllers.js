const { User } = require("../models"); //imports the user model

const getUsers = async (req, res) => {
  try {
    const users = await User.find(); //finds all the users
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const selcetedUser = await User.findById(userId); //finds a user by id

    res.json(selcetedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //creates a new user
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedFields = {
      //save the update fields to a variable to make the code cleaner
      username: req.body.username,
      email: req.body.email,
    };
    const updateUser = await User.findByIdAndUpdate(
      //finds a user by id and updates them
      userId,
      updatedFields,
      { new: true }
    );
    res.json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.findByIdAndDelete(userId); //finds one by id and deletes it
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addUserFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    const selcetedUser = await User.findById(userId); //finds the user
    const requestedFriend = await User.findById(friendId); //finds the friend
    if (!requestedFriend || !selcetedUser) {
      //if either of them don't exist then this error handling runs
      res.json("Either your selected user or requested friend does not exist");
    } else if (selcetedUser.friends.includes(friendId)) {
      // If the friend is already in the array then this error handling runs
      res.json("You already have this friend added");
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        //finds by id and updates
        userId,
        { $push: { friends: friendId } }, //pushes the new friend id into the friends array
        { new: true }
      );
      res.json(updatedUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUserFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    const selcetedUser = await User.findById(userId); //finds the user
    if (!selcetedUser) {
      //if the user doesn't exist this error handling runs
      return res.json(
        "Either your selected user or requested friend does not exist"
      );
    } else if (!selcetedUser.friends.includes(friendId)) {
      //this error handling runs when you try and delete a friend that isn't in your friend database
      return res.json("You don't have this friend added");
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        //finds and updates the user
        userId,
        { $pull: { friends: friendId } }, //pull removes it from the array
        { new: true }
      );
      res.json(updatedUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  //this exports all the functions above so that they can be called in the routes
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
};
