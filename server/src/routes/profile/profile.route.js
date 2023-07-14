const express = require("express");
const { validate } = require("./profile.validate");
const { handleValidation } = require("../../services/validate");
const { updatePhoto, updateAbout, updateName, getProfile } = require("./profile.controller");
const { verifySession } = require("supertokens-node/recipe/session/framework/express");

const profileRouter = express.Router();

profileRouter.get(
    "/",
    verifySession(),
    getProfile
)

profileRouter.post(
    "/name",
    verifySession(),
    validate("name"),
    handleValidation,
    updateName
)

profileRouter.post(
    "/about",
    verifySession(),
    validate("about"),
    handleValidation,
    updateAbout
);

profileRouter.post(
    "/photo",
    verifySession(),
    updatePhoto
);

module.exports = profileRouter;
