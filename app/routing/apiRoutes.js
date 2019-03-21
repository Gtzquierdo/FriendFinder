var lifterData = require('../data/friends.js');
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(lifterData);
    })

    app.post('/api/friends', function(req, res) {
        var newLifter = req.body;
        for (var i = 0; i < newLifter.scores.length; i++) {
            if(newLifter.scores[i] === "1 (Strongly Disagree)") {
                newLifter.scores[i] = 1;
            } else if(newLifter.scores[i] = "5 (Strongly Agree)") {
                newLifter.scores[i] = 5;
            } else {
                newLifter.scores[i] = parseInt(newLifter.scores[i]);
            }
        }
        var differencesArray = [];
        for (var i = 0; i < lifterData.length; i++) {
            var compareLifters = lifterData[i];
            var totalDifference = 0;
            for (var j = 0; j < compareLifters.scores.length; j++){
                var diffScore = Math.abs (compareLifters.scores[j] - newLifter.scores[j]);
                totalDifference += diffScore;
            }
            differencesArray[i] = totalDifference;
        }
        var bestLifter = differencesArray[0];
        var bestLifterIndex = 0;
        for (var i = 1; i < differencesArray.length; i++) {
            if (differencesArray[i] < bestLifter) {
                bestLifter = differencesArray[i];
                bestLifterIndex = i;
            }
        }
        lifterData.push(newLifter);
        res.json(lifterData[bestLifterIndex]);
    })
}

