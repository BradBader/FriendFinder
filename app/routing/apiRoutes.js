var users = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, results) {
        results.json(users);
    });
}


