const mongoose = require("mongoose");

// schema with validation
const Schema = mongoose.Schema;
const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title must be provided"],
      unique: [true, "title must be unqique"],
      max: [50, "cannot be more than 50 characters"],
      trim: true,
    },
    detail: {
      type: String,
      required: [true, "detail must be provided"],
      unique: [true, "detail must be unqique"],
      max: [2000, "cannot be more than 2000 characters"],
      trim: true,
    },
    image: {
      type: String,
      required: true
    },
    category: { 
      type: Schema.Types.ObjectId, 
      required: true
    },
    endDate: {
      type: Schema.Types.Date,
      required: true
    },
    bettingOptions: [
      {
        title: {
          required: [true, "betting title must be provided"],
          type: String
        },
        yes: {
          type: String,
        },
        no: {
          type: String
        }
      }
    ],
    status: {
      type: Number,
      default: -2
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
