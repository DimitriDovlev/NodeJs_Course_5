const express = require("express");
const CRUD = require("../API/db/CRUD");
const cors = require("cors");
const {
    v4: uuid
} = require("uuid")

const server = express();

server.use(cors());
server.use(express.json())
server.use(express.urlencoded({
    extended: false
}))






const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

server.listen(PORT, () => {
    console.log("Server is listening http://localhost:5000");
})