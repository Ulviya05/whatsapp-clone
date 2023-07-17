const express = require("express");
const fileUpload = require('express-fileupload');
const cors = require("cors");
const morganBody = require('morgan-body');
const supertokens = require("supertokens-node");
const { middleware, errorHandler } = require("supertokens-node/framework/express");

const { api } = require("./routes/api");

const app = express();

app.use(express.json({limit: '50mb'}));
// enable files upload
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 },
    createParentPath: true
}));
app.use('/photo',express.static('uploads'));


const domain = process.env.WEBSITE_DOMAIN;

app.use(cors({
  origin: domain,
  allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
  credentials: true,
}));

app.use(middleware());

app.use(express.json());

morganBody(app);

app.use("/", api);

app.use(errorHandler());

module.exports = app;