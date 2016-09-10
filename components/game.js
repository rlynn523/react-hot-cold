let React = require('react');
let UserInput = require('./user-input');
let GuessList = require('./guess-list');
let NewGame = require('./new-game');
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
                <NewGame />
            </div>
        )
    }
});

module.exports = Game;
