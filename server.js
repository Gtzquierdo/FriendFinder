// Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require ("body-parser");

// Sets up Express Server
var app = express();
var PORT = process.env.PORT || 8080;

// Express Handle Data Parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var lifters = [];

// Routes:
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});