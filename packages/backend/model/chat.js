const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const UsersSchema = new Schema(
  {
    chatId: {
      type: String,
      required: true,
      trim: true,
    },
    members: [ { type: Schema.Types.ObjectId, ref: "Users" }],
    blockedBy:[ { type: Schema.Types.ObjectId, ref: "Users" }],
    messages: [{ type: Schema.Types.ObjectId, ref: "ChatMessages" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", UsersSchema);
