//path
const path = require("path");

//file system
const fs = require("fs")

// Create a path to the file using the path module
const currPath = __dirname;
console.log(currPath)

//ime.tip , content vnatre vo file, callback function
fs.writeFile("homework.txt", "Hello from our first Node homework ", function (error) {
  if (error) throw error;
  fs.appendFile("homework.txt", "FINISHED! Async version", function (error) {
    if (error) throw error;
    fs.readFile("homework.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(data)
    })
    console.log("FINISHED!")
  })
  console.log("File created sucessfully")
})

fs.writeFileSync(path.join(currPath, "homework.txt"), "Hello from our first Node homework ")
console.log("right after first write")

let data = fs.readFileSync(path.join(currPath, "homework.txt"), "utf-8")
console.log(data)

fs.appendFileSync(path.join(currPath, "homework.txt"), "Finished! Sync version")
console.log("after first append")

data = fs.readFileSync(path.join(currPath, "homework.txt"), "utf-8")
console.log(data)

data = fs.readFileSync(path.join(currPath, "homework.txt"), "utf-8")
console.log(data)