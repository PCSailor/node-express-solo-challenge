var express = require('express');
var app = express();
var path = require('path');
var port = 3000;
var bodyParser = require('body-parser');
app.use (bodyParser.urlencoded({extended: true}));



// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];

// NOTE: for loop to cycle through jokes (or in client?)
// var jokeObject =
// function jokeObject() {
//   for (var i = 0; i < jokes.length; i++) {
//     jokes[i]
//   }
// }
// console.log(jokeObject(jokes));

// console.log(jokes); // NOTE: working onto terminal

// static file requests
app.use(express.static('server/public'));

// routes
// app.get('/firstJoke', function(req, res) {
app.get('/', function(req, res) {
var newJoke = req.body;
console.log(newJoke);
  // res.send(jokes[0]);
  res.send(jokes);
}); // app.post

// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
