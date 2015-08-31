var React = require('react');
var $ = require('jquery');


var App = React.createClass({
	getInitialState: function () {
        return {
            collection: [],
          	user: {}
        }
    },
    componentDidMount: function () {
        console.log('component did mount');
    },
    componentWillUnmount: function () {
        console.log('component will unmount');        
    },    
	render: function () {
		return (
            <div>
		         <h2>Hello</h2>
            </div>
		)
	}
});

module.exports = App;
