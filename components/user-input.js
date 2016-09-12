let React = require('react');
let store = require('../store');
let actions = require('../actions');
var connect = require('react-redux').connect;

const UserInput = React.createClass({
    onClick: function() {
        this.props.dispatch(
            actions.guessNumber(this.refs.userGuess.value)
        );
        this.refs.userGuess.value = ''
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

var Container = connect()(UserInput);
module.exports = Container;
