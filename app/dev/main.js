var React = require('react');

//var App = require('../views/App.jsx');
var AppView = require('./views/AppView.jsx');
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();


React.render(
	React.createElement(AppView, null),
	document.getElementById('react_main')
);