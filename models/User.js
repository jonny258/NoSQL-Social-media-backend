const { Schema, model } = require("mongoose");
const validate = require("mongoose-validator");

//I need to format the date before it gets to the data base


const emailValidator = [
    validate({
      validator: "isEmail",
      message: "Invalid email address",
    }),
  ];

const userSchema = new Schema(
    
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, validate: emailValidator },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }], 
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }], 
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length
})

const User = model("User", userSchema);

module.exports = User;
