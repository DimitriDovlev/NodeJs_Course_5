const express = require("express");
const cors = require("cors");
const textService = require("../API/textService");
const router = require("../API/Routes/router.const");

const server = express();

server.use(cors());
server.use(express.json());
server.use(
  express.urlencoded({
    extended: false,
  })
);
server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("Server is listening http://localhost:5000");
});
