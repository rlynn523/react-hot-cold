let React = require('react');
let store = require('../store');
let actions = require('../actions');
var connect = require('react-redux').connect;

const UserInput = React.createClass({
    onClick: function() {
        this.props.dispatch(
            actions.guessNumber(this.refs.userGuess.value)
        )
         this.props.dispatch(
             actions.fetchGuesses()
         )
        this.refs.userGuess.value = '';
    },
    render: function() {
        if (this.props.correctAnswer === true) {
            this.props.dispatch(
                actions.postGuesses()
            )
        }
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
        correctAnswer: state.correctAnswer,
    };
};
var Container = connect(mapStateToProps)(UserInput);
module.exports = Container;
