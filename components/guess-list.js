let React = require('react');
let ReactDOM = require('react-dom');
let UserInput = require('./user-input');
let connect = require('react-redux').connect;

const GuessList = React.createClass({
    render: function() {
        if(this.props.guesses.length > 1) {
            console.log(this.props.guesses);
            var guesses = this.props.guesses.map(function(guess) {
                return <li key={guess}>{guess}</li>;
            })
        }
        return(
            <ul>
                <h1>No guess yet!</h1>
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
