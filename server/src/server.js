const http = require("http");
const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const EmailPassword = require("supertokens-node/recipe/emailpassword");
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
require("dotenv").config();

supertokens.init({
    framework: "express",
    supertokens: {
        connectionURI: process.env.SUPERTOKENS_CORE_DOMAIN,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: process.env.APP_NAME,
        apiDomain: process.env.API_DOMAIN,
        websiteDomain: process.env.WEBSITE_DOMAIN
    },
    recipeList: [
        EmailPassword.init(), // initializes signin / sign up features
        Session.init({  // initializes session features
          exposeAccessTokenToFrontendInCookieBasedAuth: true
        }) 
    ]
});

const app = require("./app");

const PORT = process.env.API_PORT;
const server = http.createServer(app);

// functions to fetch jwks
var client = jwksClient({
  jwksUri: `${process.env.API_DOMAIN}/auth/jwt/jwks.json`
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key.getPublicKey();
    callback(err, signingKey);
  });
}

const domain = process.env.WEBSITE_DOMAIN;
const io = require('socket.io')(server, {
  cors: {
    origin: domain,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  }
});

io.use(function (socket, next) {
  // we first try and verify the jwt from the token param.
  if (socket.handshake.query && socket.handshake.query.token) {
    jwt.verify(socket.handshake.query.token, getKey, {}, function (err, decoded) {
      if (err) return next(new Error('Authentication error'));
      socket.decoded = decoded;
      next();
    });
  }
  else {
    next(new Error('Authentication error'));
  }
})
.on('connection', (socket) => {
  console.log("Client connected")
})

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
}

startServer();