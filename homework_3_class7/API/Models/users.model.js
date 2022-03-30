const CRUD = require("./CRUD.js");
const {
    v4: uuid
} = require("uuid");

class usersModel {

    getAllUsers() {

        return new Promise((resolve, reject) => {
            const text = CRUD.readDataFromDb("db.json")
        })
    }


}

module.exports = {
    usersModel: usersModel,
}