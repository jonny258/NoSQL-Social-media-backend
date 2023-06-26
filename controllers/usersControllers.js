const getUsers = async (req, res) => {
  try {
    res.json("this will get all users");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleUser = async (req, res) => {
  try {
    res.json("this will get one user");
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    res.json("this will create a new user");
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    res.json("this will update a user");
  } catch (err) {
    res.status(500).json(err);
  }
};

//Bonus: Remove a user's associated thoughts when deleted.

const deleteUser = async (req, res) => {
  try {
    res.json("this will delete a user");
  } catch (err) {
    res.status(500).json(err);
  }
};

const addUserFriend = async (req, res) => {
  try {
    res.json("this will add a user friend");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUserFriend = async (req, res) => {
  try {
    res.json("this will delete a user friend");
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
