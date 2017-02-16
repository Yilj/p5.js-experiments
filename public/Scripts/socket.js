//socket object for managing socket server communication
function socket() {
    //socket server url
    this.url = 'http://nodejs-experiments-p5js-experiments.44fs.preview.openshiftapps.com/';
    //this.url = 'http://localhost:8080';
    //connecting to socket server with url
    this.socket = io.connect(this.url);
    //setting up function called when a message is received from server
    this.socket.on('dataToClient', this.dataFromServer);

    this.dataToServer = function(data) {
        this.socket.emit('dataToServer', data);
    }

    this.dataFromServer = function(data) {

    }

}
