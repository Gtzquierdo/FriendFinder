// Easy routing with express
var path = require ("path");

// pass in express ('app')
module.exports = function (app) {

    // deliver the survey.html file
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    // return home.html
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
};