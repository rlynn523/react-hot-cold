let React = require('react');
let UserInput = require('./user-input');
let GuessList = require('./guess-list');
let NewGame = require('./new-game');
let Feedback = require('./feedback');
let Counter = require('./counter');
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
                <h1>Hot or Cold!</h1>
                <UserInput />
                <Counter />
                <Feedback />
                <GuessList />
                <NewGame />
            </div>
        )
    }
});

module.exports = Game;
