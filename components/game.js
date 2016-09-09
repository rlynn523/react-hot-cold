let React = require('react');
let ReactDOM = require('react-dom');
let UserInput = require('./user-input');
let GuessList = require('./guess-list');
var connect = require('react-redux').connect;

/*
-Main Component
    -User Input Component
    -User Guess List Component
    -User Feedback Component
    -New Game Component
*/

var Game = React.createClass({
    render: function(){
        return(
            <div>
                <UserInput />
                <GuessList />
            </div>
        )
    }
});
var mapStateToProps = function(state, props) {
    return {
        guesses: state.guesses,
    };
};

var Container = connect(mapStateToProps)(Game);

module.exports = Container;
