let React = require('react');
let ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
let actions = require('../actions');
let store = require('../store');
let Provider = require('react-redux').Provider;

const UserInput = React.createClass({
    onClick: function() {
        console.log(actions);
        this.props.dispatch(
            actions.guessNumber(this.props.userGuess)
        )
    },
    render: function() {
        return(
            <div>
                <form>
                    <input type='text' ref='userGuess'/>
                    <button type='submit' onClick={this.onClick}>Submit</button>
                </form>
            </div>
        )
    }
});

module.exports = UserInput
