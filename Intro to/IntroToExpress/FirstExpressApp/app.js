var express = require("express");
var app = express();

// "/" => "Hi There"

app.get("/", function(req, res){
    res.send("Hi There");
});

// "/bye" => "Goodbye";

app.get("/bye", function(req, res){
    res.send("Goodbye");
});
// "/dog" => "Meow";

app.get("/dog", function(req, res){
    res.send("MEOW");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName
    res.send("Welcome to the" +" "+ subreddit.toUpperCase() +" "+ "Subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    console.log(req.params);
    res.send("Welcome to the Commets page")
});

app.get("*", function(req, res) {
    res.send("You are a Star");
});

//Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});
