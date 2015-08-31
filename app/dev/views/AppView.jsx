var React = require('react');
var $ = require('jquery');


var App = React.createClass({
	render: function () {
        var name = 'Леха'
		return (
            <div>
		         <h2>Hello, {name}</h2>
            </div>
		)
	}
});

module.exports = App;
