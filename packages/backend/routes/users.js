// importing modules
const express = require('express');
const router = express.Router();
const {
    getProfile,
    getPublicProfile,
    getUsers,
    getProfileByUserName
} = require('../controllers/users');

const { celebrate, Joi, errors, Segments } = require('celebrate');
const validateJwtToken = require('../middlewares/auth')

router.get("/getAll", getUsers);
router.get("/profile/:userId",  getPublicProfile);
router.get("/profileByUserName/:userName",  getProfileByUserName);

router.get("/profile", validateJwtToken, getProfile);

// router.post("/emergency/contact", celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         phone: Joi.string().required(),
//     })
// }), addEmergencyContacts);
// router.put("/emergency/contact", celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         phone: Joi.string().required(),
//         _id: Joi.string().required(),
//     })
// }), updateEmergencyContacts);

// router.put("/", celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().email().required(),
//         newPassword: Joi.string().min(3).max(15).optional(),
//         oldPassword: Joi.when('newPassword', {
//             is: Joi.exist(),
//             then: Joi.string().min(3).max(15).required(),
//             otherwise: Joi.string().optional(),
//         }),
//     })
// }), updateUser);

module.exports = router;
