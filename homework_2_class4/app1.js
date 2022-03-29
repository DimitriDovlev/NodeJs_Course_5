//For Assignment 02

const express = require("express");
const cors = require("cors")
const {
    v4: uuid
} = require("uuid")
const frontPage = require("./routes/frontPage")
const users = require("./routes/users")
const app = express();


//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use(frontPage)
app.use(users)



const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, () => {
  console.log("Server is listening http://localhost:5000");
});