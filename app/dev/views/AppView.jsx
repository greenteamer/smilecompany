var React = require('react');
var $ = require('jquery');
var Settings = require('../Settings.js');
var Store = require('../store/Store.js');
var Actions = require('../actions/Actions.js');


var site_url = Settings.url;


var Test = React.createClass({
    render: function  () {
        return (
            <div>
                 <h2>Hello, {this.props.emploees[0].title[0].value}</h2>
                 <button type="button" onClick={this.getName}>получить данные</button>
            </div>
        )
    }
});


var AppView = React.createClass({
    getInitialState: function(){
        return {
            employees: []
        }        
    },
    componentWillMount: function () {
        Store.bind('changeEmployees', this.changeEmployees);
    },
    getName: function(){
        Actions.getEmployees();                        
    },
    changeEmployees: function  () {
        this.setState({
            employees: Store.employees
        });  
    },
	render: function () {
        console.log(this.state.employees);
        if (this.state.employees.length > 0) {            

            var items = this.state.employees.map(function  (item) {
                //тело функции
                var description = item.body[0].value;
                description = description.replace(/(<([^>]+)>)/ig,"");
                return (
                    <div>
                        <h2>Hello, {item.title[0].value}</h2>
                        <p>{description}</p>  
                    </div>
                )

            });

            return (
                <div>
                    <button type="button" onClick={this.getName}>получить данные</button>
                    {items} 
                </div>
            )
        } else {
            return (
                <div>
                     <h2>Hello!!!</h2>
                     <button type="button" onClick={this.getName}>получить данные</button>
                </div>
            )
        }
		
	}
});

module.exports = AppView;
