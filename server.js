var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

var friends = [
    {

    }
]



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
})

app.post("/api/friends", function (req, res) {
    var newfriend = req.body;

    newfriend = name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);

})

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  