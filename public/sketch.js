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
    console.log(data);
    drawData(data, false);
}

function mouseDragged() {
    var data = {
        mouseX,
        mouseY
    }
    sendData(data);
    drawData(data, true);
}

function drawData(data, own) {
    if (own) {
      fill(150, 10, 100, 5);
    } else {
        fill(150, 10, 10, 5);
    }
    noStroke();
    ellipse(data.mouseX, data.mouseY, 20, 20);
}
