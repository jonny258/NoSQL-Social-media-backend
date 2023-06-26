const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const selcetedUser = await User.findOne({ _id: userId });

    res.json(selcetedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedFields = {
      username: req.body.username,
      email: req.body.email,
    };
    const updateUser = await User.findOneAndUpdate(
      { _id: userId },
      updatedFields
    );
    res.json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Bonus: Remove a user's associated thoughts when deleted.

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const deletedUser = await User.deleteOne({ _id: userId });
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addUserFriend = async (req, res) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    const selcetedUser = await User.findById(userId);
    const requestedFriend = await User.findById(friendId);
    if (!requestedFriend || !selcetedUser) {
      res.json("Either your selected user or requested friend does not exist");
    } else if (selcetedUser.friends.includes(friendId)) {
      res.json("You already have this friend added");
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { friends: friendId } },
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

    const selcetedUser = await User.findById(userId);
    const requestedFriend = await User.findById(friendId);
    if (!requestedFriend || !selcetedUser) {
      res.json("Either your selected user or requested friend does not exist");
    } else if (!selcetedUser.friends.includes(friendId)) {
      res.json("You don't have this friend added");
    } else {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { friends: friendId } },
        { new: true }
      );
      res.json(updatedUser)
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
};
