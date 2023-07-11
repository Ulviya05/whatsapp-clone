const express = require("express");

const api = express.Router();

const userProfileRouter = require("./userProfile/userProfile.route");

api.use("/userProfile", userProfileRouter);

module.exports = {
  api,
};