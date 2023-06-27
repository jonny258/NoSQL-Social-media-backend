const router = require("express").Router();

const {
  //Imports all the different functions from the controller
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReactionToThought,
  deleteReactionToThought,
} = require("../../controllers/thoughtsController");

//These say what functions should be ran on what method to what route
router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReactionToThought);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteReactionToThought);

module.exports = router;
