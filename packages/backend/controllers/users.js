const mongoose = require("mongoose");

const Users = require("../model/users");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    return res.sendResponse({
      success: true,
      data: users.map((user) => {
        return {
          userId: user._id,
          userName: user.userName,
          profile: user.profile?.filename,
          createdAt: user.createdAt,
        };
      }),
    });
  } catch (err) {
    return res.sendError({ success: false, message: err.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await Users.findOne({ _id: req.user._id });
    if (!user) {
      return res.sendError({
        success: false,
        message: "User not found!",
      });
    }
    return res.sendResponse({
      success: true,
      data: {
        userId: user._id,
        userName: user.userName,
        profile: user.profile?.filename,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    return res.sendError({ success: false, message: err.message });
  }
};

const getPublicProfile = async (req, res) => {
  console.log("s-s-s>>>>>>>>req.body.userId",req.params.userId)
  try {
    const user = await Users.findOne({ _id: req.params.userId });
    if (!user) {
      return res.sendError({
        success: false,
        message: "User not found!",
      });
    }
    return res.sendResponse({
      success: true,
      data: {
        userId: user._id,
        userName: user.userName,
        profile: user.profile?.filename,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    return res.sendError({ success: false, message: err.message });
  }
};




const getProfileByUserName = async (req, res) => {
  console.log("s-s-s>>>>>>>>req.body.userId",req.params.userId)
  try {
    const user = await Users.findOne({ userName: req.params.userName });
    if (!user) {
      return res.sendError({
        success: false,
        message: "User not found!",
      });
    }
    return res.sendResponse({
      success: true,
      data: {
        userId: user._id,
        userName: user.userName,
        profile: user.profile.filename,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    return res.sendError({ success: false, message: err.message });
  }
};

module.exports = { getProfile, getUsers,getPublicProfile,getProfileByUserName };
