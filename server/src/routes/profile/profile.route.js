const express = require("express");
const { validate } = require("./profile.validate");
const { handleValidation } = require("../../services/validate");
const { updateName } = require("./profile.controller");

const profileRouter = express.Router();

profileRouter.post(
    "/name",
    validate("name"),
    handleValidation,
    updateName
);

module.exports = profileRouter;
