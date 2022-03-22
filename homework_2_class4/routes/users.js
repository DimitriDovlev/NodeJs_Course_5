const express = require("express");
const router = express.Router();
const dbJson = require("../db.json")

router.get("/users", (req, res, next) => {
    const query = req.query;
    console.log("Query: ",query);
    // let users = [
    //   { id: "1", name: "car" },
    //   { id: "2", name: "chips" },
    //   { id: "3", name: "laptop" },
    //   { id: "4", name: "car" },
    // ];
    // res.send(users);
})



module.exports = router;