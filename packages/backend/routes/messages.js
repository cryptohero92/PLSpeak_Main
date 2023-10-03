// importing modules
const express = require('express');
const router = express.Router();
const {
    createMessage,
    getEmergencyContacts,
    addEmergencyContacts,
    updateEmergencyContacts,
    getUser,
    getMessages,
    deleteMessage,
    updateMessage,
    getMessageOne,
    likeMessages,
} = require('../controllers/messages');

const { celebrate, Joi, errors, Segments } = require('celebrate');
router.get("/get/:marketId", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        marketId: Joi.string().required()
    })
}), getMessages);




module.exports = router;
