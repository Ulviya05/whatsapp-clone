const express = require("express");

const api = express.Router();

const profileRouter = require("./profile/profile.route");

api.use("/profile", profileRouter);

module.exports = {
  api,
};