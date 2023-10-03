const mongoose = require('mongoose');

// schema with validation
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    userName: {
        type: String, required: [true, 'User name must be provided'],
        max: [50, 'cannot be more than 50 characters'], trim: true,
    },
    message: {
        type: String, required: [true, 'Message must be provided'],
        trim: true,
    },
    marketId: {
        type: String, required: [true, 'market must be provided'],
        trim: true,
    },
    senderId: { type: Schema.Types.ObjectId, ref: "Users" },
    replyMessageId: {
        type: String,
        default: null,
    },
    badgeId:{
        type:Number,
        default:null
    },
    liked: {
        type: Array,
        default: [],
    },
},
    { timestamps: true });

module.exports = mongoose.model('Message', UsersSchema);