const { Schema, model, Types } = require("mongoose"); //imports everything I need from mongoose

//The reaction schema won't ever be its own table instead it exists to format the data and give it extra values like username, createdAt and reationId
//This schema will only exist in the reactions part of the thought collection
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  }, //Creates a new ObjectId
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: Schema.Types.ObjectId, ref: "User" },
    reactions: [reactionSchema], //This is where the data from the reaction schema goes
  },
  {
    toJSON: {
      //This allows virtuals
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  //This creates a virtual that is used to return the reaction length
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema); //Creates a new model

module.exports = Thought;
