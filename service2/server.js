const http = require('http');

var handler = function(req, res) {
    console.log("Hello from " + req.connection.remoteAddress + ":" + req.connection.remotePort);
    console.log("to " + req.connection.localAddress + ":" + req.connection.localPort);
    res.end('Communication réussie');
}

var server = http.createServer(handler);
server.listen(3000);























/*http.createServer(function (req, res) {
    console.log("Req came from " + req.client.remoteAddress + ":" + req.client.remotePort);
    console.log("Req served at " + req.client.localAddress + ":" + req.client.localPort);
}).listen(8893);*/

/*
const http = require('http');
var request = require('request');
console.log("service 2 running on 3000");

var handler = function(req, res) {
   console.log("Hello from " + req.connection.remoteAddress + ":" + req.connection.remotePort);
   console.log("to " + req.connection.localAddress + ":" + req.connection.localPort);
   res.end('Communication réussie');

   request({
        method: 'POST',
        uri: 'http://localhost:8001/',
    }, function (err, res) {
        console.log("Hello from " + req.connection.remoteAddress + ":" + req.connection.remotePort);
        console.log("to " + req.connection.localAddress + ":" + req.connection.localPort);
    })
};

var server = http.createServer(handler);
server.listen(3000);*/
