const fs = require("fs");

const readData = (path) => {
    fs.readFileSync(path, {
        encoding: "utf-8"
    });
}

const writeData = (path, data) => {
    fs.writeFileSync(path, data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    readDataFromDb: readData,
    writeDataToDb: writeData,
}