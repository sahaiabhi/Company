
/// <reference path="typings/tsd.d.ts" />
var http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    console.log("Company.Node running on " + port);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
}).listen(port);