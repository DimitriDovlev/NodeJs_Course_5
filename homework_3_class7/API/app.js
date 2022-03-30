const express = require("express")
const cors = require("cors")
const {
    v4: uuid
} = require("uuid")
const router = require("../API/Routes/router.main.js")
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//zosto e /api ovde a ne /users
app.use("/api", router)


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log("Server is listening at http://localhost:5000/");
})