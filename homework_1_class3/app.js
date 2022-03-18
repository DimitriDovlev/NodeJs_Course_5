//path
const path = require("path");

//file system
const fs = require("fs")

// Create a path to the file using the path module
const currPath = __dirname;
console.log(currPath)

//ime.tip , content vnatre vo file, callback function
fs.writeFile("homework.txt", "Hello from our first Node homework", function (error) {
    if (error) throw error;
    console.log("File created sucessfully")
})

fs.append("homework.txt", "FINISHED", function (error) {
    if (error) throw error;
    console.log("FINISHED")
})