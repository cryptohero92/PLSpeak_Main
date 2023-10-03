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

// router.get("/", getUser);
// router.post('/discussion',async (req, res) => {
//     const data = new Model({
//         // userId: req.body.userId,
//         messageId: req.body.messageId,
//         marketId:req.body.marketId,
//         replayMsgId:req.body.replayMsgId,
//     })
//     try {
//         const dataToSave = await data.save();
//         res.status(200).json(dataToSave)
//         console.log('runnnnnnnnnnnnnnnnning')
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// },createMessage)

router.get("/get/:marketId", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        marketId: Joi.string().required()
    })
}), getMessages);



router.get("/getOne/:marketId", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        marketId: Joi.string().required()
    })
}), getMessageOne);

router.post("/create", celebrate({
    [Segments.BODY]: Joi.object().keys({
        message: Joi.string().required(),
        marketId: Joi.string().required(),
        replyMessageId: Joi.string().optional().allow(null),
        badgeId: Joi.number().optional().allow(null),
    })

}), createMessage);


router.post("/update", celebrate({
    [Segments.BODY]: Joi.object().keys({
        message: Joi.string().required(),
        marketId: Joi.string().required(),
        messageId: Joi.string().required()
        // email: Joi.string().email().required(),
        // password: Joi.string().min(3).max(15).required(),
        // isAdmin: Joi.boolean().default(false)
    })
}), updateMessage);
router.delete("/delete", celebrate({
    [Segments.BODY]: Joi.object().keys({
        messageId: Joi.string().required()
    })
}), deleteMessage);

router.post("/like", celebrate({
    [Segments.BODY]: Joi.object().keys({
        messageId: Joi.string().required()
    })
}), likeMessages);




module.exports = router;
