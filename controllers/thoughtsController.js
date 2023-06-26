const getThoughts = async (req, res) => {
  try {
    res.json("this will get all thoughts");
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSingleThought = async (req, res) => {
  try {
    res.json("this will one thought");
  } catch (err) {
    res.status(500).json(err);
  }
};

const createThought = async (req, res) => {
  try {
    res.json("this will create a thought");
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateThought = async (req, res) => {
  try {
    res.json("this will update a thought");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteThought = async (req, res) => {
  try {
    res.json("this will delete a thought");
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
