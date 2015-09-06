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
        Actions.getEmployees();  
        Store.bind('changeEmployees', this.changeEmployees);
    },
    componentWillUnount: function () {
        Store.unbind('changeEmployees', this.changeEmployees);
    },    
    changeEmployees: function  () {
        this.setState({
            employees: Store.employees
        });  
    },
	render: function () {
        console.log(this.state.employees);
        console.log(this.state.employees.length, 'эллементов в массиве');
        if (this.state.employees.length > 0) {            

            var items = this.state.employees.map(function  (item, index) {
                //тело функции
                console.log(index, 'итерация');
                var description = item.body[0].value;
                description = description.replace(/(<([^>]+)>)/ig,"");
                return (
                    <div>
                        <h2>Hello, {item.title[0].value}</h2>
                        <p>{description}</p>  
                    </div>
                )
            });
            console.log(items);            
            return (
                <div>   
                    <h2>Наши специалисты</h2>                 
                    {items} 
                </div>
            )
        } else {
            return (
                <div>
                     <h2>Наши специалисты</h2>                     
                </div>
            )
        }
		
	}
});

module.exports = AppView;
