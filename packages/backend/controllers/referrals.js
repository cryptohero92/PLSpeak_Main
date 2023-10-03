const mongoose = require('mongoose');

const Users = require('../model/users');
const Referral = require('../model/referral')
const bcrypt = require('bcrypt');
const sendMail = require('../helpers/sendMail');
const saltRounds = 10;


const sendReferral = async (req, res) => {
    try {
        const sender = await Users.findOne({ userId: req.user._id });
        if (!sender) {
            return res.sendError({ success: false, message: 'User not found!', statuscode: 404 });
        }
        console.log("S-s-s>>>>>>>>>>>>>>>",sender)
        let referrals = []
        for (let email of req.body.emails) {
            let referral = await Referral.create({
                referredEmail: email,
                referredUserId: sender._id
            })
            referrals.push(referral)
        }

        referrals.forEach(ref => {
            try{
                sendMail({ to: ref.referredEmail, html: `<div>${sender.userName} has referred you to register plspeak <a>http://${process.env.SERVER_URL}:${process.env.SERVER_PORT}/#!/markets?${ref._id}</a></div>` })
            }catch(err){
                console.log(err)
            }
        });
        return res.sendResponse({ success: true, data: referrals });
    } catch (err) {
        return res.sendError({ success: false, message: err.message });
    }
};


module.exports = { sendReferral };