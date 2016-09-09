let React = require('react');
let store = require('../store');
let actions = require('../actions');
var connect = require('react-redux').connect;

const UserInput = React.createClass({
    onClick: function() {
        console.log(this.userGuess);
        this.props.dispatch(
            actions.guessNumber(this.userGuess.val());
        )
    },
    render: function() {
        return(
            <div>
                <form action="#">
                    <input type='text' ref={(ref) => this.userGuess = ref} />
                    <button type='button' onClick={this.onClick}>Enter</button>
                </form>
            </div>
        )
    }
});

var Container = connect()(UserInput);

module.exports = Container;
