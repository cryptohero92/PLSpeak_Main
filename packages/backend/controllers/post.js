const mongoose = require("mongoose");
const Post = require("../model/post");
const words = require("../constants/badWords.json");

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      text: req.body.text,
      createdBy: req.user._id,
      attachments: req.body.attachments,
      userName: req.user.userName,
    });
    console.log(">>>>>>>>>>>>>>>ok", req.files);

    return res.sendResponse({ data: post });
  } catch (err) {
    // await session.abortTransaction();
    return res.sendError({ message: err.message });
  }
};

const getPost = async (req, res) => {
  try {
    let post = await Post.findOne({ _id: req.params.postId });
    return res.sendResponse({ data: post });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const getAllPost = async (req, res) => {
  try {
    let posts = await Post.find({})
      .populate({
        path: "createdBy",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      })
      .populate({
        path: "likedBy",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      })
      .populate({
        path: "disLikedBy",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      })
      .populate({
        path: "attachments",
        // select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
      });
    return res.sendResponse({ data: posts.reverse() });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  console.log("update post");
  const { text, postId } = req.body;

  try {
    console.log("update post 1234");
    const pst = await Post.findOne({ _id: postId });
    console.log("psd11111", pst);
    if (pst.createdBy !== `${req.user._id}`)
      return res.sendError({
        message: "Youre not allowed to update this post",
      });
    const post = await Post.updateOne(
      { _id: postId },
      { text, images: req.files || [] }
    );
    return res.sendResponse({ data: post });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const pst = await Post.findOne({ _id: req.body.postId });
    console.log("posttttt", req.user._id);
    console.log("posttttt", pst.createdBy);
    if (pst.createdBy !== `${req.user._id}`)
      return res.sendError({
        message: "Youre not allowed to delete this post",
      });
    // {
    const post = await Post.deleteOne({ _id: req.body.postId });
    return res.sendResponse({ data: post });
    // }
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    // let messages = await Message.find({marketId: r eq.params.marketId});
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      {
        $addToSet: {
          likedBy: req.user._id,
        },
        $pull: { disLikedBy: req.user._id },
      }
    );

    return res.sendResponse();
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const dislikePost = async (req, res) => {
  try {
    // let messages = await Message.find({marketId: r eq.params.marketId});
    await Post.findOneAndUpdate(
      { _id: req.body.postId },
      {
        $addToSet: {
          disLikedBy: req.user._id,
        },
        $pull: { likedBy: req.user._id },
      }
    );

    return res.sendResponse();
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

// const getMessageOne = async (req, res) => {

//     try {
//         let messages = await Message.findOne({ marketId: req.params.marketId });
//         return res.sendResponse({ data: messages });
//     }
//     catch (error) {
//         return res.sendError({ message: error.message });
//     }
// }

module.exports = {
  createPost,
  getPost,
  updatePost,
  getAllPost,
  deletePost,
  likePost,
  dislikePost
};
