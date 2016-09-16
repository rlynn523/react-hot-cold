let React = require('react');
let store = require('../store');
let actions = require('../actions');
var connect = require('react-redux').connect;

const UserInput = React.createClass({
    onClick: function() {
        let returnNumber = this.props.dispatch(
            actions.guessNumber(this.refs.userGuess.value, this.props.counter)
        )
        if(store.getState().correctAnswer === true) {
            store.dispatch(
                actions.postGuesses(store.getState().counter)
            )
        }
        this.refs.userGuess.value = '';
    },
    render: function() {
        return(
            <div>
                <form action="#">
                    <input type='text' ref='userGuess' />
                    <button type='button' onClick={this.onClick}>Submit</button>
                </form>
            </div>
        )
    }
});

var mapStateToProps = function(state, props) {
    return {
        fewestGuesses: state.fewestGuesses,
        correctAnswer: state.correctAnswer,
        counter: state.counter
    };
};
var Container = connect(mapStateToProps)(UserInput);
module.exports = Container;
