// importing modules
const express = require("express");
const multer = require("multer");
var path = require("path");
const validateJwtToken = require("../middlewares/auth");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/data/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

var upload = multer({ storage: storage, dest: "public/data/uploads/" });

const router = express.Router();
const {
  createComment,
  getComments,
  getAllComment,
  deleteComment,
  updateComment,
  likeComment,
} = require("../controllers/comment");

const { celebrate, Joi, errors, Segments } = require("celebrate");

router.post(
  "/create",
  validateJwtToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      text: Joi.string().optional().allow(null, ""),
      attachments: Joi.array().default([]).optional(),
      postId: Joi.string().required(),
      parentId: Joi.string().optional().default(null).allow(null, ""),
    }),
  }),
  createComment
);

router.get(
  "/get/:postId",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      postId: Joi.string().required(),
    }),
  }),
  getComments
);

router.get("/getAll", getAllComment);

router.delete(
  "/delete",
  validateJwtToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      commentId: Joi.string().required(),
    }),
  }),
  deleteComment
);

router.post(
  "/update",
  validateJwtToken,
  upload.array("photos", 12),
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      text: Joi.string().required(),
      commentId: Joi.string().required(),
      images: Joi.array().default([]).optional(),
    }),
  }),
  updateComment
);

router.post(
  "/like",
  validateJwtToken,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      commentId: Joi.string().required(),
    }),
  }),
  likeComment
);

module.exports = router;
