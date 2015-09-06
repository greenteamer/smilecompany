var React = require('react');
var $ = require('jquery');
var Settings = require('../Settings.js');
var Store = require('../store/Store.js');
var Actions = require('../actions/Actions.js');
var IF = require('./customhelpers/IF.jsx');


var InfoBlock = React.createClass({
    goTo: function (link) {
        location.href = this.props.info.field_link_info_block;
    },
    render: function () {
        var text = this.props.info.body.slice(0, 140) + " ...";
        function createText() { 
            return {__html: text }; 
        };
        return (
            <div className="col-md-3 direction">
                <div className="direction_image">
                    <img  src={this.props.info.field_image_info_block} />
                    <div onClick={this.goTo} className="direction_link">
                        <i className="fa fa-link"></i>
                    </div>
                </div>
                <h3>{this.props.info.title}</h3>
                <div dangerouslySetInnerHTML={createText()} />                    
            </div>
        )
    }
});


var DirectionsView = React.createClass({
    getInitialState: function(){
        return {
            directions: []
        }        
    },
    componentWillMount: function () {
        Actions.getDirections();
        Store.bind('directionsTrigger', this.setDirections);
    },
    componentWillUnount: function () {
        Store.unbind('directionsTrigger', this.setDirections);
    },    
    setDirections: function  () {
        this.setState({
            directions: Store.directions
        });  
    },
	render: function () {                 
        var directions = this.state.directions.map(function  (direction, index) {            
            return (
                <InfoBlock info={direction} />
            )
        });            
        return (
            <div className="col-md-12 directions">                
                <IF condition={this.state.directions.length > 0}>
                    <div className="row">
                        {directions}
                    </div>
                </IF>
            </div>
        )
        
		
	}
});

module.exports = DirectionsView;
