const textService = require("../textService");
const { v4: uuid } = require("uuid");
const path = require("path");

const carDbPath = path.join(__dirname, "..", "db.json");

class CarModel {
  // 1. fetch all cars from the database
  static async getAllCars() {
    return textService.readData(carDbPath);
  }

  //2. fetch a single car by ID from the database
  static async getCarById(carId) {
    const cars = await this.getAllCars();
    const foundCar = cars.find((car) => car.id === carId);
    if (foundCar) {
      return foundCar;
    } else {
      return Promise.reject({ message: "No car found" });
    }
  }

  //3. create new cars in the database
  static async createCar(carData) {
    const cars = await this.getAllCars();
    const newCar = {
      id: uuid(),
      ...carData,
    };

    const updatedDb = [...cars, newCar];
    await textService.saveData(carDbPath, updatedDb);
    return newCar;
  }

  //4.delete cars from the database
  static async deleteCar(carId) {
    const cars = await this.getAllCars();
    const updatedDb = cars.filter((car) => car.id !== carId);
    if (updatedDb.length === cars.length) {
      return Promise.reject({ message: "No such car found" });
    }

    await textService.saveData(carDbPath, updatedDb);
  }

  //5. update a car in the database
  static async updateCar(carId, updatedCarData) {
    const cars = await this.getAllCars();
    const foundCar = await this.getCarById(carId);

    const updatedCar = { ...foundCar, ...updatedCarData };
    const updatedCars = cars.map((car) =>
      car.id === foundCar.id ? updatedCar : car
    );
    await textService.saveData(carDbPath, updatedCars);
  }
}

module.exports = CarModel;
