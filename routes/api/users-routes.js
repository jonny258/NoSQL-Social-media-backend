const router = require("express").Router();

const {
  //Imports all the different functions from the controller
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/usersControllers");

//These say what functions should be ran on what method to what route
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addUserFriend)
  .delete(deleteUserFriend);

module.exports = router;
