const mongoose = require("mongoose");
const { jwtSign } = require("../helpers/JWT");
const Attachment = require("../model/attachment");

const createAttachment = async (req, res) => {
  try {
    console.log("s-s-ss>>>>>>>>>>>filele>", req.file);
    const attachment = await Attachment.create(req.file);
    return res.sendResponse({
      data: {
        attachment_id: attachment._id,
      },
    });
  } catch (err) {
    return res.sendError({ message: err });
  }
};

module.exports = { createAttachment };
