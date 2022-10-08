var http = require('http');
const axios = require("axios");


http.createServer(function (req, res) {
    console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort);
    console.log("to " + req.client.localAddress + ":" + req.client.localPort);

    const axios = require('axios')

    let url = 'http://localhost:3000/'

    axios.get(url)
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
}).listen(8001);

