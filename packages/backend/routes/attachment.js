// importing modules
const express = require("express");
const router = express.Router();
const { createAttachment } = require("../controllers/attachment");

const { celebrate, Joi, errors, Segments } = require("celebrate");

const multer = require("multer");
const auth = require("../middlewares/auth");
const path= require('path')
const crypto = require('crypto')

const upload = multer({
  storage: multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, path.join(__dirname, '../public/data/uploads/'))
      },
      filename: (req, file, cb) => {
          // randomBytes function will generate a random name
          let customFileName = crypto.randomBytes(18).toString('hex')
          // get file extension from original file name
          let fileExtension = path.extname(file.originalname).split('.')[1];
          cb(null, customFileName + '.' + fileExtension)
      }
  })
})

router.use(auth);
router.post("/single/upload", upload.single("attachment"), createAttachment);

module.exports = router;
