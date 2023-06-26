const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReactionToThought,
  deleteReactionToThought,
} = require("../../controllers/thoughtsController");

router.route("/").get(getThoughts).post(createThought);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(createReactionToThought)
  .delete(deleteReactionToThought);

module.exports = router;
