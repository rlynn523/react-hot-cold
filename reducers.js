var actions = require('./actions');

var initialState = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    guesses: [],
    msg: '',
    userGuess: ''
};

const HotColdReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GUESS_NUMBER:
            let correct = false;
            let msg;
            let errorMessage;
            action.number = parseInt(action.number);
            if(action.number === state.guessNumber) {
                correct = true;
                msg = 'You Win! Play Again?'
            } else if (state.guessNumber - 5 <= action.number && action.number <= state.guessNumber + 5) {
                correct = false;
                msg = "Very Hot!";
            } else if (state.guessNumber - 15 <= action.number && action.number <= state.guessNumber + 15) {
                correct = false;
                msg = "Warm!";
            } else if (state.guessNumber - 25 <= action.number && action.number <= state.guessNumber + 25) {
                correct = false;
                msg = "Cold!";
            } else {
                msg = "Cold As Planet Hoth!"
            }
            let guessLists = state.guesses.concat(action.number);
            if(isNaN(action.number)) {
                msg = 'Please enter a number!';
            } else {
                guessLists;
            }
            return Object.assign({}, state, {
                guesses: guessLists,
                correctAnswer: correct,
                msg: msg
            });
        break;
        case actions.NEW_GAME:
        var newGame = Object.assign({}, state, {
            guessNumber: Math.floor(Math.random() * 100) + 1,
            guesses: [],
            msg: 'New Game Started!'
        })
            return newGame
        break;
        default:
            return state;
    }
};

exports.HotColdReducer = HotColdReducer;
