const fs = require("fs")
const path = require("path")


const readData = (file) => {
    return fs.readFileSync(path.join(__dirname, file), {
        encoding: "utf-8"
    }, (error) => {
        if (error) {
            throw error;
        }
    })
}


module.exports = {
    readDataFromDb: readData,
}