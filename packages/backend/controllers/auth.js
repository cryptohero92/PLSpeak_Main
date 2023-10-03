const mongoose = require("mongoose");
const { jwtSign } = require("../helpers/JWT");
const Users = require("../model/users");
const Referral = require("../model/referral");

const generateAccessToken = (user) => {
  return jwtSign({ userId: user._id });
};

const register = async (req, res) => {
  console.log("ss-s->>>>>>>>>>filele>>>>>>>", req.file);
  try {
    let user = await Users.findOne({ accountAddress: req.body.accountAddress });
    if (user) {
      return res.sendError({ message: "User already exists" });
    }
    user = await Users.create({ ...req.body, profile: req.file });
    if (req.body.referralId) {
      await Referral.updateOne(
        { _id: req.body.referralId },
        {
          accepted: true,
          referralAcceptedUserId: user._id,
        }
      );
    }
    return res.sendResponse({
      data: {
        accessToken: generateAccessToken(user),
        userId: user._id,
        userName: user.userName,
        profile: user.profile?.filename,
      },
    });
  } catch (err) {
    // await session.abortTransaction();
    return res.sendError({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    let user = await Users.findOne({ accountAddress: req.body.accountAddress });
    if (!user) return res.sendResponse({ data: false });
    return res.sendResponse({
      data: {
        data: true,
        accessToken: generateAccessToken(user),
        userId: user._id,
        userName: user.userName,
        profile: user.profile?.filename,
      },
    });
  } catch (err) {
    // await session.abortTransaction();
    return res.sendError({ message: err.message });
  }
};

// const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//         user: 'dhileepr03@gmail.com',
//         pass: "rajavallid",
//     },
// });

const send = async (req, res) => {
  console.log("ss-s->>>>>>>>>>filele reqqq>>>>>>>", req.body);

  const { referEmail } = req.body;
  if (!referEmail) {
    return res.status(422).send({ message: "Missing email." });
  }
  // Step 1 - Create and save the user
  const user = await new Referral({
    // _id: new mongoose.Types.ObjectId,
    referEmail: req.body.referEmail,
    referralId: req.body.referralId,
    referralUserAmt: req.body.referralUserAmt,
    // userId:req.body.userId
  }).save();
  sendMail({
    to: referEmail,
    html: `<b>Please verify this url to access Plspeak ${process.env.CLIENT_DOMAIN}/verify-email/${verifyToken}</b>`,
  });
};

module.exports = { register, login, send };
