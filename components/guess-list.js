let React = require('react');
var connect = require('react-redux').connect;

const GuessList = React.createClass({
    render: function() {
        console.log(this.props.guesses);
        if(this.props.guesses !== []) {
            var guesses = this.props.guesses.map(function(guess) {
                return <li key={guess}>{guess}</li>
            });
        }
        return(
            <ul>
                <h1>No guess yet!</h1>
                {this.props.guesses}
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
