var socket;

function setup() {
    createCanvas(600, 600);
    background(51);

    socket = io.connect('http://nodejs-experiments-p5js-experiments.44fs.preview.openshiftapps.com/');
    socket.on('dataToClient', dataFromServer);
}

function sendData(data) {
    socket.emit('dataToServer', data);
}

function dataFromServer(data) {
    console.log(data));
}
