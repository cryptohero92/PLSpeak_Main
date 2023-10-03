const mongoose = require('mongoose');
const Message = require('../model/messages');
const words = require('../constants/badWords.json')


console.log(">>>>>>>>>>>,okk");

const createMessage = async (req, res) => {
    let firstArray = words;
    let messages = req.body.message
    let jsonArray = [];
    firstArray.forEach(firstElement => {
        if (messages.indexOf(firstElement) >= 0) {
            jsonArray.push({ 'name': firstElement, 'matched': true });
            firstArray.forEach(string => {
                if (messages.includes(string)) messages = messages.replace(string, "*****");
            })
        } else {
            jsonArray.push({ 'name': firstElement, 'matched': false });
        }
    });
    try {
        let message = await Message.create({ message: messages, replyMessageId: req.body.replyMessageId, badgeId: req.body.badgeId, marketId: req.body.marketId, userName: req.user.userName, senderId: req.user._id });
        return res.sendResponse({ data: message });
    } catch (err) {
        return res.sendError({ message: err.message });
    }
};

const updateMessage = async (req, res) => {

    const { message, messageId, marketId } = req.body;

    try {
        const msg = await Message.findOne({ _id: messageId });
        if (msg.senderId != `${req.user._id}`)
            return res.sendError({
                message: "Youre not allowed to update this comment",
            });
        const result = await Message.updateOne({ _id: messageId }, { message }, { marketId });

        return res.sendResponse({ data: result });
    }

    catch (error) {
        return res.sendError({ message: error.message });
    }
}
const deleteMessage = async (req, res) => {

    try {
        const messageId = req.body.messageId;
        const msg = await Message.findOne({ _id: messageId });
        if (msg.senderId != `${req.user._id}`)
            return res.sendError({
                message: "Youre not allowed to delete this comment",
            });
        await Message.deleteOne({ _id: messageId })
        return res.sendResponse();
    }
    catch (error) {
        return res.sendError({ message: error.message });
    }
}


const getMessages = async (req, res) => {

    try {
        let messages = await Message.find({ marketId: req.params.marketId }).populate({
            path: "senderId",
            select: { userName: 1, profile:1, _id: 1, updatedAt: 1 },
          });
        return res.sendResponse({ data: messages.reverse() });
    }
    catch (error) {
        return res.sendError({ message: error.message });
    }
}

const likeMessages = async (req, res) => {

    try {
        // let messages = await Message.find({marketId: req.params.marketId});
        await Message.findOneAndUpdate({ _id: req.body.messageId }, {
            $push: {
                "liked": req.user._id
            }
        });

        return res.sendResponse();
    }
    catch (error) {
        return res.sendError({ message: error.message });
    }
}


const getMessageOne = async (req, res) => {

    try {
        let messages = await Message.findOne({ marketId: req.params.marketId });
        return res.sendResponse({ data: messages });
    }
    catch (error) {
        return res.sendError({ message: error.message });
    }
}

module.exports = { createMessage, deleteMessage, getMessageOne, getMessages, updateMessage, getMessages, likeMessages };