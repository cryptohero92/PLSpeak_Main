const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const EventCategorySchema = new Schema(
  {
    parentID: {
      type: Schema.Types.ObjectId
    },
    title: {
      type: String,
      unique: [true, "title must be unique"],
      required: [true, "title must be provided"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", EventCategorySchema);
