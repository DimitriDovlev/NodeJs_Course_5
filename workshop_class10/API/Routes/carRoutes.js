const router = require("express").Router();
const CarController = require("../Controllers/carController");

// 1. fetch all cars from the database
// http://localhost:5000/cars/all
router.get("/all", CarController.getAllCars);

//2. fetch a single car by ID from the database
// http://localhost:5000/cars/:id
router.get("/:id", CarController.getCarById);

//3. create new cars in the database
// http://localhost:5000/cars/add
router.post("/add", CarController.createCar);

//4.delete cars from the database
// http://localhost:5000/cars/:id
router.delete("/:id", CarController.deleteCar);

//5. update a car in the database
// http://localhost:5000/cars/update/:id
router.patch("/update/:id", CarController.updateCar);

// router.get("/", (req, res) => {
//     const item = req.params.body;

//     carController.getAllCars()
//         .then((item) => {
//             res.status(200).json(item)
//         })
//         .catch((error) => {
//             res.status(400).json(error)
//         })
// })

// router.get("/:id?", (req, res) => {
//   console.log(req.params);
//   if (req.params && req.params.id) {
//     const itemId = req.params.id;

//     carController
//       .getCarById(itemId)
//       .then((item) => {
//         res.status(200).json(item);
//       })
//       .catch((error) => {
//         res.status(404).json(error);
//       });
//   } else {
//     carController
//       .getAllCars()
//       .then((response) => {
//         res.status(200).json(response);
//       })
//       .catch((error) => {
//         res.status(400).json(error);
//       });
//   }
// });

module.exports = router;
