var React = require('react');

//var App = require('../views/App.jsx');
var AppView = require('./views/AppView.jsx');
var SliderView = require('./views/SliderView.jsx');
var DirectionsView = require('./views/DirectionsView.jsx');
var AdvantagesView = require('./views/AdvantagesView.jsx');
var PortfolioView = require('./views/PortfolioView.jsx');
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();


// React.render(<AppView />, document.getElementById('react_main'));
React.render(<SliderView />, document.getElementById('react_slider'));
React.render(<DirectionsView />, document.getElementById('react_directions'));
React.render(<AdvantagesView />, document.getElementById('react_advantages'));
React.render(<PortfolioView />, document.getElementById('react_portfolio'));


