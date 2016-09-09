var actions = require('./actions');

var initialState = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    guesses: []
};

const HotColdReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GUESS_NUMBER:
            let correct = false;
            let errorMessage;
            action.number = parseInt(action.number);
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
                guesses: state.guesses,
                correctAnswer: correct,
                errorMessage: errorMessage
            });
        break;
        case actions.NEW_GAME:
            return Object.assign({}, initialState, {
                guessNumber: Math.floor(Math.random() * 100) + 1,
            })
        break;
        default:
            return state;
    }
};

exports.HotColdReducer = HotColdReducer;
