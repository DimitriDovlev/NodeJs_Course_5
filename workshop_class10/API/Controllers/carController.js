const CarModel = require("../Models/carModel");

class CarController {
  // 1. fetch all cars from the database
  static async getAllCars(req, res) {
    try {
      const cars = await CarModel.getAllCars();
      res.status(200).send(cars);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //2. fetch a single car by ID from the database
  static async getCarById(req, res) {
    try {
      const { id: carId } = req.params;
      const car = await CarModel.getCarById(carId);
      res.status(200).send(car);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //3. create new cars in the database
  static async createCar(req, res) {
    try {
      const carData = req.body;
      const createCar = await CarModel.createCar(carData);
      res.status(200).send(createCar);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //4.delete cars from the database
  static async deleteCar(req, res) {
    try {
      const { id: carId } = req.params;
      await CarModel.deleteCar(carId);
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send(error);
    }
  }

  //5. update a car in the database
  static async updateCar(req, res) {
    try {
      const { id: carId } = req.params;
      const carUpdate = req.body;
      await CarModel.updateCar(carId, carUpdate);
      res.status(200).send(carUpdate)
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

module.exports = CarController;
