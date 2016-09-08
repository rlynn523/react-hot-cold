let actions = require('./actions');
let store = require('./store');
let UserInput = require('./components/user-input');
let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
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
            <div><UserInput /></div>
        )
    }
})
store.dispatch(actions.guessNumber('mario'));

ReactDOM.render(<Game />, document.getElementById('app')
);
