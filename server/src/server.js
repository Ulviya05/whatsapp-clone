const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT;
const DB = process.env.DB;

const app = require("./app");

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
}

startServer();