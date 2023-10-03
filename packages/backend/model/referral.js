const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// schema with validation
const Schema = mongoose.Schema;
const ReferralSchema = new Schema({
    referredEmail: {
        type: String,
        required: [true, 'Email must be provided'],
    },
    referredUserId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    maxAmountDeposited: {
        type: Number,
        default: 0
    },
    accepted: {
        type: Boolean,
        default:false
    },
    referralAcceptedUserId: {
        type: String,
        default: null
    },
    expiredAt: {
        type: Date,
        default: new Date(new Date().getTime()+(30*24*60*60*1000))
    },

},
    { timestamps: true });

module.exports = mongoose.model('referrals', ReferralSchema);