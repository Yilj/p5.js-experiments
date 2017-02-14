var express = require('express');
var expressApp = express();
var expressServer = expressApp.listen(3000);

expressApp.use(express.static('public'));

console.log("node.js server running ...");
