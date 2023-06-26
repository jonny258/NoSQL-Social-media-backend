const { Thought, User } = require('../models')


const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find()
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId
    const selectedThought = await Thought.findById(thoughtId)
    res.json(selectedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    const userId = req.body.username
    console.log(userId)
    const newThought = await Thought.create(req.body)

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );
      console.log(updatedUser)
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const updatedFields = { thoughtText: req.body.thoughtText };
    const updatedThought = await Thought.findByIdAndUpdate(thoughtId, updatedFields, { new: true });
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
  
};

const deleteThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId
    const deletedThought = await Thought.findByIdAndDelete(thoughtId)
    res.json(deletedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createReactionToThought = async (req, res) => {
  try {
    res.json("this will create a reaction to a thought");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteReactionToThought = async (req, res) => {
  try {
    res.json("this will delete a reaction to a thought");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReactionToThought,
  deleteReactionToThought,
};
