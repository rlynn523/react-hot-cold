var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static('build'));
mongoose.connect('mongodb://localhost/hot-cold');

var Guesses = require('./models/guesses');
var fewestGuesses;

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/fewest-guesses', function(req, res) {
    Guesses.find(function(err, guesses) {
        if (err) {
            return res.status(500);
        }
        res.send(guesses)
    });
    Guesses.count(function(err, count) {
        if (err) {
            return res.status(500);
        }
    })
});

app.post('/fewest-guesses', function(req, res) {
    if(!fewestGuesses || fewestGuesses > req.body.fewestGuesses){
        console.log(req.body.fewestGuesses);
        fewestGuesses = req.body.fewestGuesses
    }
    return res.status(201).json(fewestGuesses);
    // Guesses.create({
    //     guess: req.body.guess
    // }, function(err, guesses) {
    //     if (err) {
    //         return res.status(500).json({
    //             message: 'Internal Server Error'
    //         });
    //     }
    //     res.status(201).json(guesses);
    // });
});

app.listen(process.env.PORT || 8080, process.env.IP);
