let React = require('react');
var connect = require('react-redux').connect;

const GuessList = React.createClass({
    render: function() {
        var guesses='';
        var guessLists = this.props.guessLists.map(function(guessList){
                 return <li key={guessList}>{guessList}</li>;
        });
        return(
            <ul>
                {guessLists}
            </ul>
        );
    }
})
var mapStateToProps = function(state, props) {
    return {
        guessLists: state.guesses,
    };
};
var Container = connect(mapStateToProps)(GuessList);
module.exports = Container;
