let React = require('react');
var connect = require('react-redux').connect;

const Counter = React.createClass({
    render: function() {
        return(
            <h3>Number of Guesses: {this.props.counter}</h3>
        )
    }
})

var mapStateToProps = function(state, props) {
    return {
        counter: state.counter,
    };
};
var Container = connect(mapStateToProps)(Counter);
module.exports = Container;
