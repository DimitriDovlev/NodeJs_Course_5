const fsPromises = require("fs/promises");

class textService {
  static async readData(path) {
    const data = await fsPromises.readFile(path, {
      encoding: "utf-8",
    });
    return JSON.parse(data);
  }

  static async saveData(path, data) {
    return fsPromises.writeFile(path, JSON.stringify(data, 0, 2));
  }
}

module.exports = textService;
