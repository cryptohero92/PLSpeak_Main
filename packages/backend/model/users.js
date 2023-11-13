const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const UsersSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "User name must be provided"],
      unique: [true, "User name must be unqique"],
      max: [50, "cannot be more than 50 characters"],
      trim: true,
    },
    accountAddress: {
      type: String,
      required: [true, "Account must be provided"],
      trim: true,
    },
    privilege: {
      type: Number,
      default: 0 // general
    },
    profile: {
      type: Object,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
