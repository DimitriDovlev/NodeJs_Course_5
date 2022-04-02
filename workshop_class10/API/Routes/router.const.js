const router = require("express").Router();
const carRoute = require("../Routes/carRoutes")

router.use("/cars", carRoute);


module.exports = router;