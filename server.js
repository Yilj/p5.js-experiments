//setting up express
var express = require('express');
var expressApp = express();
//setting up an express server on port 8080
var expressServer = expressApp.listen(8080);
expressApp.use(express.static('public'));

//setting up socket
var socket = require('socket.io');
var io = socket(expressServer);

console.log("node.js server running ...");


io.sockets.on('connection', newSocketConnection);

function newSocketConnection(socket) {
    console.log('new socket connection: "' + socket.id + '"');

    socket.on('dataToServer', dataFromClient);

    function dataFromClient(data) {
        socket.broadcast.emit('dataToClient', data);
        console.log(data);
    }
}
