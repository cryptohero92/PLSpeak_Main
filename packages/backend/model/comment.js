const mongoose = require('mongoose');

// schema with validation
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    text: {
        type: String, required: [true, 'text must be provided'],
        trim: true,
    },
    parentId: {
        type: String,
        default: null,
    },
    postId: { type: Schema.Types.ObjectId, ref: "Posts" },
    likedBy:[{ type: Schema.Types.ObjectId, ref: "Users" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "Users" },
    attachments: [{ type: Schema.Types.ObjectId, ref: "Attachments" }],
},
    { timestamps: true });

module.exports = mongoose.model('Comment', CommentSchema);