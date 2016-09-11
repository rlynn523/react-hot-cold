let React = require('react');
var connect = require('react-redux').connect;

const GuessList = React.createClass({
    render: function() {
        var guesses='';
        var guessList = this.props.guessList;
            for(var i=0; i < guessList.length; i++) {
                guesses += this.props.guessList[i] + ' ';
            }
        return(
            <ul>
                {guesses}
            </ul>
        );
    }
})
var mapStateToProps = function(state, props) {
    return {
        guessList: state.guesses,
    };
};
var Container = connect(mapStateToProps)(GuessList);
module.exports = Container;
