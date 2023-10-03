// importing modules
const express = require('express');
const multer  = require('multer')
var path = require('path')
const validateJwtToken = require('../middlewares/auth')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/data/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage,  dest: 'public/data/uploads/' });

const router = express.Router();
const {
    createPost,
    getPost,
    updatePost,
    getAllPost,
    deletePost,
    getDetails,
    likePost,
    dislikePost

} = require('../controllers/post');

const { celebrate, Joi, errors, Segments } = require('celebrate');

router.get("/get/:postId", celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        postId: Joi.string().required(),

    })
}), getPost);


router.get("/getAll",getAllPost);

router.post("/create", validateJwtToken,celebrate({
    [Segments.BODY]: Joi.object().keys({
        // text: Joi.string().optional().allow(null,""),
        text: Joi.string().optional(),
        attachments: Joi.array().default([]).optional()
    })

}), createPost);


router.post("/update",validateJwtToken,upload.array('photos', 12), celebrate({
    [Segments.BODY]: Joi.object().keys({
        text: Joi.string().required(),
        postId: Joi.string().required(),
        images: Joi.array().default([]).optional()
    })
}), updatePost);


router.delete("/delete",validateJwtToken, celebrate({
    [Segments.BODY]: Joi.object().keys({
        postId: Joi.string().required()
    })
}), deletePost);

router.post("/like",validateJwtToken, celebrate({
    [Segments.BODY]: Joi.object().keys({
        postId: Joi.string().required()
    })
}), likePost);

router.post("/dislike",validateJwtToken, celebrate({
    [Segments.BODY]: Joi.object().keys({
        postId: Joi.string().required()
    })
}), dislikePost);



module.exports = router;
