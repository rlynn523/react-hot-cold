let React = require('react');
var connect = require('react-redux').connect;

const Feedback = React.createClass({
    render: function() {
        return(
            <h3>{this.props.msg}</h3>
        )
    }
});

var mapStateToProps = function(state, props) {
    return {
        msg: state.msg,
    };
};
var Container = connect(mapStateToProps)(Feedback);
module.exports = Container;
