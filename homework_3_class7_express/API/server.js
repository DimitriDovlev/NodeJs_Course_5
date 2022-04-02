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

server.get("/", (req, res, next) => {
    let stringData = CRUD.readDataFromDb("db.json")
    let data = JSON.parse(stringData);
    res.send(data);
})

server.get("/users", (req, res, next) => {
    let stringData = CRUD.readDataFromDb("db.json")
    let data = JSON.parse(stringData);
    res.send(data)
})


server.get("/users/:id", (req, res, next) => {
    let id = req.params.id;
    let stringData = CRUD.readDataFromDb("db.json")
    let data = JSON.parse(stringData);
    const user = data.find((user) => user.id === id)
    if (!user) {
        throw new Error("User not found!")
    }
    res.send(user);
})

server.post("/users/addUsers", (req, res, next) => {
    // name, phoneNumber, picture, and an ID generated on the backend.
    console.log(req.body);
    const user = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        imgSrc: req.body.imgSrc,
        id: uuid()
    }
    console.log(user);
    CRUD.addDataToDb(user, "db.json")
    res.send({
        message: "New user has been added"
    })
})

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

server.listen(PORT, () => {
    console.log("Server is listening http://localhost:5000");
})