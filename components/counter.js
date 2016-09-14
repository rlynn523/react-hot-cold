let React = require('react');
var connect = require('react-redux').connect;

const Counter = React.createClass({
    render: function() {
        return(
            <div>
                <h3>Number of Guesses: {this.props.counter}</h3>
                <h3>Fewest Number of Guesses: {this.props.fewestGuesses}</h3>
            </div>
        )
    }
})

var mapStateToProps = function(state, props) {
    return {
        counter: state.counter,
        fewestGuesses: state.fewestGuesses
    };
};

var Container = connect(mapStateToProps)(Counter);
module.exports = Container;
