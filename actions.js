let fetch = require('isomorphic-fetch');
/*
Actions
-User can guess a number
-User guess a string
-User can start a new game
*/

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number, counter) {
    return {
        type: GUESS_NUMBER,
        number: number,
        counter: counter
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function(game, number) {
    return {
        type: NEW_GAME,
        game: game
    };
};

var FETCH_FEWEST_GUESSES = 'FETCH_FEWEST_GUESSES';
var fetchFewestGuesses = function(guesses) {
    return {
        type: FETCH_FEWEST_GUESSES,
        guesses: guesses
    }
}

var fetchGuesses = function(guesses) {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       })
       .then(function(data) {
           var guesses = data;
           return dispatch(
               fetchFewestGuesses(guesses)
           )
       })
    }
}

var POST_FEWEST_GUESSES = 'POST_FEWEST_GUESSES';
var postFewestGuesses = function(fewestGuesses) {
    return {
        type: POST_FEWEST_GUESSES,
        fewestGuesses: fewestGuesses
    }
}
var postGuesses = function(fewestGuesses) {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                fewestGuesses
            })
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json();
       })
       .then(function(data) {
           var guesses = data;
           return dispatch(
               postFewestGuesses(guesses)
           )
       })
    }
}

exports.fetchGuesses = fetchGuesses;
exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.postGuesses = postGuesses;
exports.POST_FEWEST_GUESSES = POST_FEWEST_GUESSES;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
