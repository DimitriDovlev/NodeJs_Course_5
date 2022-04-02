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

const addData = (data, file) => {
    let items = JSON.parse(readData(file));
    items = [...items, data];
    return fs.writeFileSync(
        path.join(__dirname, file),
        JSON.stringify(items),
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
};


module.exports = {
    readDataFromDb: readData,
    addDataToDb: addData
}