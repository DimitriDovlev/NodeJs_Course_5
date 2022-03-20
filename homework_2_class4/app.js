// import { JsonDB } from 'node-json-db';
// import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

//

const jsonDB = require("node-json-db");
const config = require("node-json-db/dist/lib/JsonDBConfig");

const http = require("http");

const server = http.createServer((req, res) => {
    // 
    console.log(req)

}).listen(3000)