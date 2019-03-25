var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var match = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // parse the results
        var data = req.body;
        var scores = data.scores;

        console.log(scores);

        // calculate the difference between user's scores and scores of each friend
        var difference = 0;

        // loop through all
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            difference = 0;

            // loop through all scores of each
            for (var j = 0; j < friends.length; j++) {

                // find difference between scores and add them together
                difference += Math.abs(parseInt(scores[j]) - parseInt(friends[i].scores[j]));

                // if sum of differences is less than the difference of the current
                if (difference <= match.friendDifference) {

                    // reset
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.friendDifference = difference;
                }

            }

        }
        // save 
        friends.push(data);
        // return a JSON object
        res.json(match);
    });
};