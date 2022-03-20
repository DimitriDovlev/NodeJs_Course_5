const http = require("http");
const dbJson = require("./db.json")

const server = http.createServer((req, res) => {

    // console.log(dbJson.clients[0])

    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        return res.end(
            `<p>id: ${dbJson.clients[0].id}</P>
            <p>name: ${dbJson.clients[0].name}</P>
            <p>age: ${dbJson.clients[0].age}</P>`
        );
    }

}).listen(3000)