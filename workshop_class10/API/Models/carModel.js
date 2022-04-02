const textService = require("../textService");
const {
    v4: uuid
} = require("uuid")

class CarModel {

    getAllCars() {
        return new Promise((resolve, reject) => {
            const dataString = textService.readDataFromDb("db.json")
            const data = JSON.parse(dataString)
            if (!dataString) {
                reject({
                    message: "No data to display"
                })
            }
            resolve(data)
        })
    }

    getCarById(id) {
        return new Promise((resolve, reject) => {
            const dataString = textService.readDataFromDb("db.json")
            const data = JSON.parse(dataString)
            const item = data.filter((item) => item.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    message: "No such item found"
                })
            }
        })
    }



}

module.exports = CarModel;