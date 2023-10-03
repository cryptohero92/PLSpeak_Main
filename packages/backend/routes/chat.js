// importing modules
const express = require('express');
const router = express.Router();
const {
    createMessage,
    getMessages
} = require('../controllers/chat');

const { celebrate, Joi, errors, Segments } = require('celebrate');

router.post("/send", celebrate({
    [Segments.BODY]: Joi.object().keys({
        message: Joi.string().required(),
        receiverId: Joi.string().required(),
    })

}), createMessage);

router.get("/get/:receiverId", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        receiverId: Joi.string().required(),
    })

}), getMessages);

module.exports = router;
