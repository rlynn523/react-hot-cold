/*
Actions
-User can guess a number
-User guess a string
-User can start a new game
*/

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
    return {
        type: GUESS_NUMBER,
        number: number,
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function(game, number) {
    return {
        type: NEW_GAME,
        game: game
    };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
