var express = require('express');
var expressApp = express();
var expressServer = expressApp.listen(8080);

expressApp.use(express.static('public'));

console.log("node.js server running ...");
