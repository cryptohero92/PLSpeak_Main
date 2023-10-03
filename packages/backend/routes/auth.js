// importing modules
const express = require('express');
const router = express.Router();
const {
    register,
    login,
    send
} = require('../controllers/auth');
const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const { celebrate, Joi, errors, Segments } = require('celebrate');
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

router.post("/register", upload.single('uploaded_file'), celebrate({
    [Segments.BODY]: Joi.object().keys({
        userName: Joi.string().required(),
        accountAddress: Joi.string().required(),
        referralId: Joi.string().optional().default(null),
        // email: Joi.string().email().required(),
        // password: Joi.string().min(3).max(15).required(),
        // isAdmin: Joi.boolean().default(false)
    })
}), register);

router.post("/login", celebrate({
    [Segments.BODY]: Joi.object().keys({
        accountAddress: Joi.string().required(),
        // email: Joi.string().email().required(),
        // password: Joi.string().min(3).max(15).required(),
        // isAdmin: Joi.boolean().default(false)
    })
}), login);

module.exports = router;
