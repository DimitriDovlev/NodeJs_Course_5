const router = require("express").Router();
const carRoute = require("../Routes/carRoutes")



// http://localhost:5000/cars
router.use("/cars", carRoute);


module.exports = router;