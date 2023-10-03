const mongoose = require("mongoose");
const words = require("../constants/badWords.json");
const Comment = require("../model/comment");
// const words = require('../constants/.json')

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create({
      text: req.body.text,
      createdBy: req.user._id,
      attachments: req.body.attachments,
      postId: req.body.postId,
      parentId: req.body.parentId,
    });
    return res.sendResponse({ data: comment });
  } catch (err) {
    // await session.abortTransaction();
    return res.sendError({ message: err.message });
  }
};

const getComments = async (req, res) => {
  try {
    const comment = await Comment.find({ postId: req.params.postId }).populate({
      path: "createdBy",
      select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
    }).populate({
      path: "likedBy",
      select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
    }).populate({
      path: "attachments",
      // select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
    });
    console.log(">>>>>>>>doneee");
    return res.sendResponse({ data: comment });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const getAllComment = async (req, res) => {
  try {
    const comments = await Comment.find({});
    return res.sendResponse({ data: comments });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const updateComment = async (req, res) => {
  const { text, commentId } = req.body;

  let firstArray = words;
  let messages = req.body.text;
  console.log("req.body-------", req.body);

  let jsonArray = [];
  firstArray.forEach((firstElement) => {
    if (messages.indexOf(firstElement) >= 0) {
      console.log("22");
      jsonArray.push({ name: firstElement, matched: true });
      firstArray.forEach((string) => {
        if (messages.includes(string))
          messages = messages.replace(string, "*****");
        console.log("24", messages);
      });
    } else {
      jsonArray.push({ name: firstElement, matched: false });
    }
  });

  try {
    const cmt = await Comment.findOne({ _id: commentId });
    if (cmt.createdBy != `${req.user._id}`)
      return res.sendError({
        message: "Youre not allowed to update this comment",
      });
    const comment = await Comment.updateOne(
      { _id: commentId },
      { text: messages, images: req.files || [] }
    );
    return res.sendResponse({ data: comment });
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

const deleteComment = async (req, res) => {
  try {
    // setPostmodel(false)

    const cmt = await Comment.findOne({ _id: req.body.commentId });
    console.log("S-sdelete",cmt.createdBy,`${req.user._id}`)

    if (`${cmt.createdBy}` != `${req.user._id}`)
      return res.sendError({
        message: "Youre not allowed to delete this comment",
      });
    const comment = await Comment.deleteOne({ _id: req.body.commentId });
    return res.sendResponse({ data: comment });
  } catch (error) {
    return res.sendError({ messgage: error.message });
  }
};

const likeComment = async (req, res) => {
  try {
    // let messages = await Message.find({marketId: req.params.marketId});
    await Comment.findOneAndUpdate(
      { _id: req.body.commentId },
      {
        $push: {
          likedBy: req.user._id,
        },
      }
    );

    return res.sendResponse();
  } catch (error) {
    return res.sendError({ message: error.message });
  }
};

module.exports = {
  createComment,
  getComments,
  getAllComment,
  deleteComment,
  updateComment,
  likeComment,
};
