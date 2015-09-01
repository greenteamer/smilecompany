var React = require('react');
var $ = require('jquery');
var Settings = require('../Settings.js');



var Actions = require('../actions/Actions.js');


var site_url = Settings.url;


var AppView = React.createClass({
    getInitialState: function(){
        return {
            emploees: []
        }        
    },
    getName: function(){
        console.log('AppView getName');
        Actions.getEmployees();
        // Actions.getPages();    

        // $.ajax({
        //     url: 'http://co45324.tmweb.ru/api/v1/employees',
        //     dataType: 'json',
        // })
        // .done(function(data) {
        //     console.log(data);             
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });
        
    },
    clearState: function  () {
        this.setState({
            name: ''
        });  
    },
	render: function () {
        if (this.state.emploees.length > 0) {
            return (
                <div>
                     <h2 onClick={this.getName}>Hello, {this.state.emploees[0].title[0].value}</h2>
                     <button type="button" onClick={this.clearState}>обнулить</button>
                </div>
            )
        } else {
            return (
                <div>
                     <h2 onClick={this.getName}>Hello!!!</h2>
                     <button type="button" onClick={this.clearState}>обнулить</button>
                </div>
            )
        }
		
	}
});

module.exports = AppView;
