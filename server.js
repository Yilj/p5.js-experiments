//express setup
//importing express framework
var express = require('express');
//creating express app
var app = new express();
//setting up app to listen to port #8080
var server = app.listen(8080);
//setting up app to serve a static page from ./public direcotry
app.use(express.static('public'));


//socket setup
//importing scoket framework
var socket = require('socket.io');
//creating socket io with the express server
var io = new socket(server);
//setting up function called when a new client connects
io.sockets.on('connection', function(socket) {
    //setting up function called when a message is received from client
    socket.on('dataToServer', function(data) {
        socket.broadcast.emit('dataToClient', data);
        console.log(data);
    });
});
