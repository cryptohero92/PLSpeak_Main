const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const ChatMessagesSchema = new Schema(
  {
    message: {
      type: String,
      required: [true, "Message must be provided"],
      trim: true,
    },
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachments" }],
    deletedBy: [{ type: Schema.Types.ObjectId, ref: "Users" }],
    senderId: { type: Schema.Types.ObjectId, ref: "Users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ChatMessages", ChatMessagesSchema);
