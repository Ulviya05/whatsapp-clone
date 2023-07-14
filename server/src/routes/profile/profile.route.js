const express = require("express");
const { validate } = require("./profile.validate");
const { handleValidation } = require("../../services/validate");
const { updateName, getProfile } = require("./profile.controller");
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
);

module.exports = profileRouter;
