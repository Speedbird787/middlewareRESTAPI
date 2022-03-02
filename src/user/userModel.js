const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    required: true,
  },
  movies: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `${Movies}`,
    unique: false
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;