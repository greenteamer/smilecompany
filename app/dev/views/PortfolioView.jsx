var React = require('react');
var $ = require('jquery');
var Settings = require('../Settings.js');
var Store = require('../store/Store.js');
var Actions = require('../actions/Actions.js');
var IF = require('./customhelpers/IF.jsx');

// dialog
var Dialog = require('material-ui').Dialog;
var ThemeManager = require('material-ui/lib/styles/theme-manager')();
var FlatButton = require('material-ui').FlatButton;
var Colors = require('material-ui').Styles.Colors;


var Photo = React.createClass({
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    scalePhoto: function () {
        console.log('scalePhoto');
        this.refs.portfolioModal.show();
    },
    pagePhoto: function () {
        console.log('pagePhoto');
        location.href = '/portfolio';
    },
    render: function () {
        var portfolioModal = [
            <Dialog
                    ref="portfolioModal"
                    className="test_modal"
                    title="Быстрый просмотр товара"
                    contentClassName="portfolio_modal"
                    style={{overflow: 'scroll'}}>
                <div className="modal_inner">
                    <img src={this.props.photo.field_portfolio_image} />
                </div>
            </Dialog>
        ];
        first_class = "portfolio_content portfolio_content_" + this.props.index;
        return (            
            <div className={first_class}>
                <div className="portfolio_images_wrapper">
                    <div className="front-portfolio">
                        <div className="portfolio-outer">                            
                            <img src={this.props.photo.field_portfolio_image} />
                        </div>
                    </div>
                    <div className="portfolio-bg">
                        <div className="portfolio-bg-front">
                            <div className="portfolio-bg-outer">
                                <div className="inner_link">
                                    <i onClick={this.scalePhoto} className="fa fa-search"></i>
                                    <i onClick={this.pagePhoto} className="fa fa-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {portfolioModal}                         
                </div>
            </div>
        )
    }
});


var PortfolioView = React.createClass({
    getInitialState: function(){
        return {
            portfolio: []
        }        
    },
    componentWillMount: function () {
        Actions.getPortfolio();
        Store.bind('portfolioTrigger', this.setPortfolio);
    },
    componentWillUnount: function () {
        Store.unbind('portfolioTrigger', this.setPortfolio);
    },    
    setPortfolio: function  () {
        this.setState({
            portfolio: Store.portfolio
        });  
    },
	render: function () {                 
        var photo_items = this.state.portfolio.map(function  (photo, index) {            
            return (
                <Photo photo={photo} index={index} />
            )
        });            
        return (
            <div className="col-md-12 portfolio">
                <h2 className="title_star">Наше портфолио</h2>
                <IF condition={this.state.portfolio.length > 0}>
                    <div>
                        {photo_items}
                    </div>
                </IF>
            </div>
        )
        
		
	}
});

module.exports = PortfolioView;
