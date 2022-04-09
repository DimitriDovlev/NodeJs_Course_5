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
        JSON.stringify(items, 0, 2),
        (error) => {
            if (error) {
                throw error;
            }
        }
    );
};

const deleteData = (id, file) => {
    // const id = id;
    let items = JSON.parse(readData(file))

    items = items.filter((item) => item.id !== id)

    return fs.writeFileSync(
        path.join(__dirname, file),
        JSON.stringify(items, 0, 2),
        (err) => {
            if (err) {
                throw err;
            }
        }
    )
}

const updateData = (id, data, file) => {
    let items = JSON.parse(readData(file));
    let index = items.findIndex((item) => item.id === id);
    if (!index && index !== 0) {
        throw new Error("User does not exist in the Database!");
    }
    items[index] = {
        ...items[index],
        ...data
    };
    fs.writeFileSync(path.join(__dirname, file), JSON.stringify(items, 0, 2), (err) => {
        if (err) {
            throw err;
        }
    });
    return items[index];
}


module.exports = {
    readDataFromDb: readData,
    addDataToDb: addData,
    deleteDataFromDb: deleteData,
    updateDataFromDb: updateData
}