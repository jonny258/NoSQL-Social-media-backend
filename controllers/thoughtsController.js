const { Thought, User } = require("../models"); //Import the models

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find(); //Finds all the thoughts in the thought collection
    res.json(thoughts); //Returns the result to insomnia
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const selectedThought = await Thought.findById(thoughtId); //Finds just one thought by the id, the id is provided in the URL
    res.json(selectedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    const userId = req.body.username;
    const newThought = await Thought.create(req.body); //This makes a new thought

    const updatedUser = await User.findByIdAndUpdate(
      //finds and updates a user based on the username field of the req.body
      userId,
      { $push: { thoughts: newThought._id } }, //This pushes the the thought id from the thought that was just made into the user thoughts array so that they are linked
      { new: true } //The new true updates the database so that the accurate updatedUser is returned
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
    const updatedFields = { thoughtText: req.body.thoughtText }; // I saved the object that they will update the thought with to a variable so that the code is cleaner
    const updatedThought = await Thought.findByIdAndUpdate(
      //Finds the thought by the id an updates it
      thoughtId, //this selects the thought
      updatedFields, // this provides the fields to update and the update values
      { new: true } //this make it so the updated thought is accurate
    );
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const deletedThought = await Thought.findByIdAndDelete(thoughtId); //finds a thought by id and deletes it
    res.json(deletedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createReactionToThought = async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId;
    const selectedThought = await Thought.findByIdAndUpdate(
      //finds a thought by id so that it can update it
      thoughtId, //finds the thought
      {
        $push: {
          //pushes a new reaction to the reaction array
          reactions: {
            reactionBody: req.body.reactionBody,
            username: this.username, //this makes the username match on the reaction and the thought
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
    const reactionId = req.params.reactionId;

    const selectedThought = await Thought.findById(thoughtId); //finds a thought by id
    if (!selectedThought) {
      //if it doesn't exist then this error handling runs
      return res.json("The thought you've selected doesn't exist");
    }

    const reactionIndex = selectedThought.reactions.findIndex(
      //finds the index of the reaction that has a matching Id
      (reaction) => reaction._id.toString() === reactionId.toString() //change both of these to a string so the validation isn't tripped every time
    );

    if (reactionIndex === -1) {
      //error handling
      return res.json("The reaction you want to delete is not on this thought");
    }

    selectedThought.reactions.splice(reactionIndex, 1); //removes the thought at the specified index

    const updatedThought = await selectedThought.save(); //saves the thought that got the reaction removed
    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  //this exports all the functions above so that they can be called in the routes
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReactionToThought,
  deleteReactionToThought,
};
