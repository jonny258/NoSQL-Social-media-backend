const { Thought, User } = require("../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const selectedThought = await Thought.findById(thoughtId);
    res.json(selectedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    const userId = req.body.username;
    console.log(userId);
    const newThought = await Thought.create(req.body);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $push: { thoughts: newThought._id } },
      { new: true }
    );
    console.log(updatedUser);
    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const updatedFields = { thoughtText: req.body.thoughtText };
    const updatedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      updatedFields,
      { new: true }
    );
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const deletedThought = await Thought.findByIdAndDelete(thoughtId);
    res.json(deletedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createReactionToThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const selectedThought = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: {
          reactions: {
            reactionBody: req.body.reactionBody,
            username: this.username,
          },
        },
      },
      { new: true }
    );

    res.json(selectedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteReactionToThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const reactionId = req.params.reactionId
    
    const selectedThought = await Thought.findById(thoughtId);
    if(!selectedThought){
      return res.json("The thought you've selected doesn't exist")
    }

    console.log(reactionId)
    console.log(selectedThought.reactions)
    const reactionIndex = selectedThought.reactions.findIndex(
      (reaction) => reaction._id.toString() === reactionId.toString()
    );
    
    if (reactionIndex === -1){
      return res.json("The reaction you want to delete is not on this thought")
    }

    selectedThought.reactions.splice(reactionIndex, 1)

    const updatedThought = await selectedThought.save();
    res.json(updatedThought);
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
