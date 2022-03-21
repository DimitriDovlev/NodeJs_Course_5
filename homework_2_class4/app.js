const http = require("http");
const dbJson = require("./db.json")
const fs = require("fs")
const path = require("path")
const {
    v4: uuid
} = require("uuid");


const server = http.createServer((req, res) => {

    // console.log(dbJson.clients[0])
    if (req.url == "/") {
        res.setHeader("Content-Type", "text/html");
        return res.end(
            `<form action='/users' method='POST'><input type='text' name='name'/><button type='submit'>SUBMIT</button> </form>
            <p>id: ${dbJson.clients[0].id}</P>
            <p>name: ${dbJson.clients[0].name}</P>
            <p>age: ${dbJson.clients[0].age}</P>`
        );
    }
    if (req.url == "/users" && req.method == "POST") {
        let chunks = []
        req.on("data", (chunk) => {
            console.log("Chunk", chunk)
            chunks.push(chunk);
            console.log("Chunks", chunks)
        })
        req.on("end", () => {
            console.log("chunks", chunks);
            const dataString = Buffer.concat(chunks).toString();
            console.log("data string:", dataString);
            console.log("data string Buffer.concat(chunks):", Buffer.concat(chunks));
            console.log("data string Buffer.concat(chunks).toString():", Buffer.concat(chunks).toString());
            const splitedData = dataString.split("=");
            console.log("Splited data", splitedData)
            const result = {
                [splitedData[0]]: splitedData[1]
            };
            console.log("result", result);


            insertToDb(result)
            // fs.writeFile(path.join(__dirname, db.dbJson), )
            return res.end(`<h1>Newly added user: ${JSON.stringify(result.name)}</h1>`);
        });
        // res.setHeader("Content-Type", "text/html");
        // return res.end(
        //     `<p>id: ${dbJson.clients[0].id}</P>
        //     <p>name: ${dbJson.clients[0].name}</P>
        //     <p>age: ${dbJson.clients[0].age}</P>`
        // );
    }
    console.log("URL: ", req.url);
    console.log("METHOD: ", req.method);
    // console.log("METHOD: ", data);
    // res.end("THIS IS OUR RESPONSE");

}).listen(3000)



function insertToDb(newClient) {
    const data = JSON.parse(readDb())
    console.log(data.clients)
    const updatedDb = {
        clients: [...data.clients, {
            ...newClient,
            id: uuid()
        }]
    };
    fs.writeFile("db.json", JSON.stringify(updatedDb), (error) => {
        if (error) {
            console.log("Unable to write to db.json file")
        } else {
            console.log("Client was added to db.json")
        }
    })
}

function readDb() {
    const data = fs.readFileSync("db.json", "utf-8")

    console.log("data.toString()", data.toString());
    console.log("data", data);
    return data.toString();
}
// readDb()