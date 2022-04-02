const router = require("express").Router();
const CarController = require("../Controllers/carController");
const carController = new CarController();


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

router.get("/:id?", (req, res) => {
    console.log(req.params);
    if (req.params && req.params.id) {
        const itemId = req.params.id;

        carController.getCarById(itemId)
            .then((item) => {
                res.status(200).json(item);
            })
            .catch((error) => {
                res.status(404).json(error);
            })
    } else {
        carController.getAllCars()
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                res.status(400).json(error)
            })
    }
})

module.exports = router;