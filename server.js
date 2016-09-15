var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static('build'));
mongoose.connect('mongodb://localhost/hot-cold');

var Guesses = require('./models/guesses');
var bestScore;

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fewest-guesses', function(req, res) {
    Guesses.find(function(err, bestScore) {
        if (err) {
            return res.status(500);
        }
        res.send(bestScore)
    });
});

app.post('/fewest-guesses', function(req, res) {
    Guesses.update({
        $set: {bestScore: req.body.currentUserScore}
    }, function(err, bestScore) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(bestScore);
    });
});

app.listen(process.env.PORT || 8080, process.env.IP);
