var actions = require('./actions');

var initialState = {
    guessNumber: Math.floor(Math.random() * 100) + 1,
    guesses: []
};

const HotColdReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GUESS_NUMBER:
            let correct = false;
            let winMsg;
            let errorMessage;
            action.number = parseInt(action.number);
            if(action.number === state.guessNumber) {
                correct = true;
                winMsg = 'You Win! Play Again?'
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
                winMsg: winMsg,
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
