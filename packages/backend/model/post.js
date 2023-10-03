const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const PostSchema = new Schema(
  {
    text: {
      type: String, default:""
    },
    likedBy:[{ type: Schema.Types.ObjectId, ref: "Users" }],
    disLikedBy:[{ type: Schema.Types.ObjectId, ref: "Users" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "Users" },
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachments" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);
