const express = require("express")
const router = express.Router();
const dbJson = require("../db.json")
// console.log("ROUTER: ",router)
router.get("/", (req, res, next) => {
    res.send(`<form action='/users' method='POST'>Name:<input type='text' name='name'/>age:<input type='text' name='age'/><button type='submit'>SUBMIT</button> </form>
    <p>id: ${dbJson[0].id}</P>
    <p>name: ${dbJson[0].name}</P>
    <p>age: ${dbJson[0].age}</P>`)
})

module.exports = router;