const mongoose = require("mongoose");
const Chat = require("../model/chat");
const ChatMessages = require("../model/chatMessages");
const words = require("../constants/badWords.json");

console.log(">>>>>>>>>>>,okk");

const getChatId = (sender, receiver) => {
  return [`${sender}`, `${receiver}`]
    .sort((a, b) => a.localeCompare(b))
    .join("-");
};

const createMessage = async (req, res) => {
  const io = req.app.get("io");

  try {
    let chat = await Chat.findOne({
      chatId: getChatId(req.user._id, req.body.receiverId),
    });

    if (!chat) {
      chat = await Chat.create({
        chatId: getChatId(req.user._id, req.body.receiverId),
        members: [`${req.user._id}`, `${req.body.receiverId}`],
      });
    }

    let message = await ChatMessages.create({
      message: req.body.message,
      senderId: req.user._id,
    });
    await chat.updateOne({
      $addToSet: {
        messages: message._id,
      },
    });
    let newChat = await Chat.findOne({
      chatId: getChatId(req.user._id, req.body.receiverId),
    }).populate({
        path: "members",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      })
      .populate({
        path: "messages",
        populate: {
          path: "senderId",
        },
      })
      .populate({
        path: "blockedBy",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      });
    chat.members.forEach((member) => {
      console.log("ss-=s>>>>>>.memebrrr", member);
      if (`${member._id}` !== `${req.user._id}`) {
        io.to(`${member._id}`).emit("RECEIVE_MESSAGE", {
            type: "NEW_CHAT_MESSAGE",
            data: newChat,
        });
      }
    });
    return res.sendResponse({ data: chat });
  } catch (err) {
    return res.sendError({ message: err.message });
  }
};

const getMessages = async (req, res) => {
  console.log("s-s-s>>>>>>>>>", getChatId(req.user._id, req.params.receiverId));
  try {
    let chat = await Chat.findOne({
      chatId: getChatId(req.user._id, req.params.receiverId),
    });

    if (!chat) {
      await Chat.create({
        chatId: getChatId(req.user._id, req.params.receiverId),
        members: [`${req.user._id}`, `${req.params.receiverId}`],
      });
    }
    chat = await Chat.findOne({
      chatId: getChatId(req.user._id, req.params.receiverId),
    })
      .populate({
        path: "members",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      })
      .populate({
        path: "messages",
        populate: {
          path: "senderId",
        },
      })
      .populate({
        path: "blockedBy",
        select: { userName: 1, profile: 1, _id: 1, updatedAt: 1 },
      });
    //   .populate({
    //     path: "attachments",
    //     // select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
    //   });;

    //   let message = await ChatMessages.create({
    //     message: req.body.message,
    //     senderId: req.user._id,
    //   });
    //   await chat.updateOne({
    //     $addToSet: {
    //       messages: message._id,
    //     },
    //   });

    return res.sendResponse({ data: chat });
  } catch (err) {
    return res.sendError({ message: err.message });
  }
};

module.exports = { createMessage, getMessages };
