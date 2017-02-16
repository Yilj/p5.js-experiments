var socket;
var rocket;
var pRocket;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);

    socket = new socket();
    rocket = new rocket();
}

function draw() {
    //background(51);

    rocket.update();
    rocket.render();

    sendRocket();

    var lAmount = 0.8;
    var aAmount = 0.02;

    if (keyIsDown(UP_ARROW)) {
        rocket.addlAcc(-lAmount);
    }
    if (keyIsDown(DOWN_ARROW)) {
        rocket.addlAcc(lAmount);
    }
    if (keyIsDown(LEFT_ARROW)) {
        rocket.addaAcc(-aAmount);
    }
    if (keyIsDown(RIGHT_ARROW)) {
        rocket.addaAcc(aAmount);
    }
}

function sendRocket() {
    var dataRocket = {
        lPosX: rocket.lPos.x,
        lPosY: rocket.lPos.y,
        aPos: rocket.aPos
    }
    socket.dataToServer(dataRocket);
}

function receiveRocket(dataRocket) {
    background(51);
    push();
    fill(150,249,130);
    translate(dataRocket.lPosX, dataRocket.lPosY);
    rotate(dataRocket.aPos);
    triangle(-10, 10, 10, 10, 0, -10);
    pop();
}
