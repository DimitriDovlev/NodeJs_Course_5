const CarModel = require("../Models/carModel")
const carModel = new CarModel();

class CarController {

    getAllCars() {
        return carModel.getAllCars();
    }

    getCarById(id) {
        return carModel.getCarById(id);
    }
}


module.exports = CarController;