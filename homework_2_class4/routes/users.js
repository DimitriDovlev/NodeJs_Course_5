const express = require("express");
const router = express.Router();
const dbJson = require("../db.json")
const fs = require("fs")
const path = require("path")

//C:\Users\user\Desktop\Seavus\Course_5\homework_2_class4\routes
//__dirname

const getData = (file) => {
    return fs.readFileSync(file)
}
const addData = (data, file) => {
    // Take what's in the database, turn into a JS Array
    let items = JSON.parse(getData(file));

    // Add item to the array
    items = [...items, data];

    return fs.writeFileSync(
        file,
        JSON.stringify(items),
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
};

router.get("/users", (req, res, next) => {
    const query = req.query;
    console.log("Query: ", query);
    let usersStringData = getData("db.json")
    let users = JSON.parse(usersStringData)

    res.send(users);
})

router.get("/users/:id", (req, res) => {
    let usersStringData = getData("db.json")
    let users = JSON.parse(usersStringData)

    // console.log(__dirname)
    const user = users.find((user) => user.id === req.params.id)
    res.send(user)
})

router.post("/users", (req, res) => {
    try {
        if (!req.body) {
            throw new Error("No body defined");
        }
        console.log(req.body);
        res.redirect("/users");
    } catch (error) {
        res.statusCode = 400;
        res.send("Missing body");
    }
})


module.exports = router;