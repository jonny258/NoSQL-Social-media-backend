const { Schema, model, Types } = require("mongoose");
const validate = require("mongoose-validator"); //mongoose validatior is what allows me to check if something is actually a email

const emailValidator = [
  //This gets called every time a new email is added
  validate({
    validator: "isEmail", //isEmail is built into mongoose-validator
    message: "Invalid email address",
  }),
];

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: emailValidator,
    }, //This is where emailvalidator gets called
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      //this allows virtuals
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  //this virtual returns the friends array length
  return this.friends.length;
});

const User = model("User", userSchema); //Creates a mongo DB model

module.exports = User;
