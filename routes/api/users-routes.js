const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/usersControllers");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addUserFriend)
  .delete(deleteUserFriend);

module.exports = router;
