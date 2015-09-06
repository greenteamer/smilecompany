var React = require('react');
var $ = require('jquery');
var Settings = require('../Settings.js');
var Store = require('../store/Store.js');
var Actions = require('../actions/Actions.js');
var IF = require('./customhelpers/IF.jsx');


var AdvantageBlock = React.createClass({    
    render: function () {
        var text = this.props.info.body.slice(0, 100) + " ...";
        function createText() { 
            return {__html: text }; 
        };
        return (
            <div className="col-md-6 advantage">
                <div className="advantage_image">
                    <img  src={this.props.info.field_image_info_block} />                    
                </div>
                <h4>{this.props.info.title}</h4>
                <div dangerouslySetInnerHTML={createText()} />                    
            </div>
        )
    }
});


var AdvantagesView = React.createClass({
    getInitialState: function(){
        return {
            advantages: []
        }        
    },
    componentWillMount: function () {
        Actions.getAdvantages();
        Store.bind('advantagesTrigger', this.setAdvantages);
    },
    componentWillUnount: function () {
        Store.unbind('advantagesTrigger', this.setAdvantages);
    },    
    setAdvantages: function  () {
        this.setState({
            advantages: Store.advantages
        });  
    },
	render: function () {                 
        var advantages = this.state.advantages.map(function  (advantage, index) {            
            return (
                <AdvantageBlock info={advantage} />
            )
        });            
        return (
            <div className="col-md-6 advantages">                
                <IF condition={this.state.advantages.length > 0}>
                    <div className="row">
                        {advantages}
                    </div>
                </IF>
            </div>
        )
        
		
	}
});

module.exports = AdvantagesView;
