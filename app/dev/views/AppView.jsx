var React = require('react');
var $ = require('jquery');


var AppView = React.createClass({
    getInitialState: function(){
        return {
            name: ''
        }        
    },
    getName: function(){

        if (this.state.name != '') {
            this.setState({
                name: ''
            });
        } else {
            this.setState({
                name: 'Леха'
            });
        }
        
    },
    clearState: function  () {
        this.setState({
            name: ''
        });  
    },
	render: function () {
		return (
            <div>
		         <h2 onClick={this.getName}>Hello, {this.state.name}</h2>
                 <button type="button" onClick={this.clearState}>обнулить</button>
            </div>
		)
	}
});

module.exports = AppView;
