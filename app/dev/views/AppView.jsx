var React = require('react');
var $ = require('jquery');


var AppView = React.createClass({
    getInitialState: function(){
        return {
            emploees: []
        }        
    },
    getName: function(){
        $.ajax({
            url: '/api/v1/employees',
            dataType: 'json',
        })
        .done(function(data) {
            console.log(data); 
            this.setState({
                emploees: data
            }); 
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
    },
    clearState: function  () {
        this.setState({
            name: ''
        });  
    },
	render: function () {
		return (
            <div>
		         <h2 onClick={this.getName}>Hello, {this.state.emploees[0].title[0].value}</h2>
                 <button type="button" onClick={this.clearState}>обнулить</button>
            </div>
		)
	}
});

module.exports = AppView;
