const router = require("express").Router();
const users = require("./users.route.js")

router.use("/users", users)

module.exports = {
    router: router,
}