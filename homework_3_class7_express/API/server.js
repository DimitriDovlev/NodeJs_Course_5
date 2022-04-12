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

// server.get("/", (req, res, next) => {
//     let stringData = CRUD.readDataFromDb("db.json")
//     let data = JSON.parse(stringData);
//     res.send(data);
// })

// server.get("/users", (req, res, next) => {
//     let stringData = CRUD.readDataFromDb("db.json")
//     let data = JSON.parse(stringData);
//     res.send(data)
// })


server.get("/users/:id?", (req, res, next) => {
    let id = req.params.id;
    let stringData = CRUD.readDataFromDb("db.json")
    let data = JSON.parse(stringData);
    const user = data.find((user) => user.id === id)
    if (!user) {
        // throw new Error("User not found!")
        res.send(data)
    }
    res.send(user);
})

//middleware to check if phone number has 6 digits
server.post("/users/addUsers", (req, res, next) => {
    console.log("first post");
    if (req.body.phoneNumber.length == 6) {
        next()
    } else {
        res.send({
            message: "Phone number needs to be 6 digits"
        })
    }

})

server.post("/users/addUsers", (req, res, next) => {
    // name, phoneNumber, picture, and an ID generated on the backend.
    const user = {
        id: uuid(),
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        imgSrc: req.body.imgSrc,
    }
    CRUD.addDataToDb(user, "db.json")
    res.send({
        message: "New user has been added"
    })
})

server.delete("/users/:id", (req, res, next) => {
    const id = req.params.id;
    CRUD.deleteDataFromDb(id, "db.json")

    res.send(JSON.stringify({
        id: id,
        deleted: true,
    }))
})

server.put("/users/:id", (req, res, next) => {
    const id = req.params.id;
    const user = req.body;
    const updatedUser = CRUD.updateDataFromDb(id, user, "db.json");
    res.send(updatedUser);
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

server.listen(PORT, () => {
    console.log("Server is listening http://localhost:5000");
})