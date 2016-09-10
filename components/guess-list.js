let React = require('react');
let connect = require('react-redux').connect;

let UserInput = require('./user-input');

const GuessList = React.createClass({
    render: function() {
        if(this.props.guesses !== []) {
            var guesses = this.props.guesses.map(function(guess) {
                return <li key={guess}>{guess}</li>
            });
        }
        return(
            <ul>
                <h1>No guess yet!</h1>
                {guesses}
            </ul>
        );
    }
})
var mapStateToProps = function(state, props) {
    return {
        guesses: state.guesses,
    };
};
var Container = connect(mapStateToProps)(GuessList);
module.exports = Container;
