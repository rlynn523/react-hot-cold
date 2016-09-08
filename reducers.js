var actions = require('./actions');

var initialState = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    guesses: []
};

const HotColdReducer = (state = initialState, action) => {
    if (action.type === actions.GUESS_NUMBER) {
        let correct = false;
        let errorMessage;
        if(action.number === state.guessNumber) {
            correct = true;
        }
        let guesses = state.guesses;
        if(isNaN(action.number)) {
            errorMessage = 'Please enter a number!';
        } else {
            state.guesses.push(action.number);
        }
        return Object.assign({}, state, {
            guesses: guesses,
            correctAnswer: correct,
            errorMessage: errorMessage
        });
    }
    else if (action.type === actions.NEW_GAME) {
        return Object.assign({}, initialState, {
            guessNumber: Math.floor(Math.random() * 100) + 1,
        })
    }
};

exports.HotColdReducer = HotColdReducer;
