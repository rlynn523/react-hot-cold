let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;

let store = require('./store');
let Game = require('./components/game.js');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <Game />
        </Provider>,
        document.getElementById('app')
    );
});
