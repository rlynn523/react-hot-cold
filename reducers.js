var actions = require('./actions');

var initialState = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    guesses: []
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
            let guesses = state.guesses;
            if(isNaN(action.number)) {
                errorMessage = 'Please enter a number!';
            } else {
                state.guesses.push(action.number);
            }
            return Object.assign({}, state, {
                guesses: state.guesses,
                correctAnswer: correct,
                msg: msg,
                errorMessage: errorMessage
            });
        break;
        case actions.NEW_GAME:
        var newGame = Object.assign({}, initialState, {
            guessNumber: Math.floor(Math.random() * 100) + 1,
            guesses: []
        })
            return newGame
        break;
        default:
            return state;
    }
};

exports.HotColdReducer = HotColdReducer;
