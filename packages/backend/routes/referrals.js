// importing modules
const express = require('express');
const router = express.Router();
const {
    sendReferral
} = require('../controllers/referrals');

const { celebrate, Joi, errors, Segments } = require('celebrate');

// router.get("/", getUser);
router.post('/invite', celebrate({
    [Segments.BODY]: Joi.object().keys({
        emails: Joi.array().required(),
    })
}), sendReferral);

module.exports = router;
