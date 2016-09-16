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

var FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess = function(fewestGuesses) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        fewestGuesses: fewestGuesses
    }
}

var FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesError = function(fewestGuesses, error) {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        fewestGuesses: fewestGuesses,
        error: error
    }
}

var fetchGuesses = function(fewestGuesses) {
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
           var fewestGuesses = data[0].bestScore;
           return dispatch(
               fetchFewestGuessesSuccess(fewestGuesses)
           )
       })
       .catch(function(error) {
           return dispatch(
               fetchFewestGuessesError(fewestGuesses, error)
           )
       })
    }
}

var POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
var postFewestGuessesSuccess = function(currentUserScore) {
    return {
        type: POST_FEWEST_GUESSES_SUCCESS,
        currentUserScore: currentUserScore
    }
}

var POST_FEWEST_GUESSES_ERROR = 'POST_FEWEST_GUESSES_ERROR';
var postFewestGuessesError = function(currentUserScore, error) {
    return {
        type: POST_FEWEST_GUESSES_ERROR,
        currentUserScore: currentUserScore,
        error: error
    }
}
var postGuesses = function(currentUserScore) {
    return function(dispatch) {
        var url = 'http://localhost:8080/fewest-guesses';
        return fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({currentUserScore})
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
               var error = new Error(response.statusText)
               error.response = response
               throw error;
           }
           return response.json({});
       })
       .then(function(data) {
           return dispatch(
               postFewestGuessesSuccess(currentUserScore)
           )
       })
       .catch(function(err){
       });
    }
}
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesSuccess;
exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesError = fetchFewestGuessesError;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.postFewestGuessesSuccess= postFewestGuessesSuccess;
exports.POST_FEWEST_GUESSES_SUCCESS = POST_FEWEST_GUESSES_SUCCESS;
exports.postFewestGuessesError= postFewestGuessesError;
exports.POST_FEWEST_GUESSES_ERROR = POST_FEWEST_GUESSES_ERROR;
exports.fetchGuesses = fetchGuesses;
exports.postGuesses = postGuesses
