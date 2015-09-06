var React = require('react');
var $ = require('jquery');
var Store = require('../store/Store.js');
var Actions = require('../actions/Actions.js');
var SimpleSlider = require('react-slick');
var IF = require('./customhelpers/IF.jsx');


var Slider = React.createClass({
    render: function () {
        console.log('Slider this.props.slide: ', this.props.slide);
        return (            
            <div>   
                <img src={this.props.slide.field_slide_image} alt="test" />
            </div>            
        )
    }
});


var SliderView = React.createClass({
    getInitialState: function () {
        return {
            slides: []
        }  
    },
    componentWillMount: function () {
        Actions.getSlides();
        Store.bind('slidesTrigger', this.setSlidesToState);
    },
    componentWillUnmount: function () {
        Store.unbind('slidesTrigger', this.setSlidesToState);
    },
    setSlidesToState: function () {
        console.log('SliderView setSlidesToState');
        this.setState({
            slides: Store.slides
        });  
    },    
    render: function () {
        console.log('SliderView start render state.slides: ', this.state.slides);
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };       
        var items = this.state.slides.map(function(slide){
            console.log('SliderView slide in map function: ', slide);  
            return (
                <div>
                    <Slider key={slide.id} slide={slide}/>
                </div>
            )
        });
        return (            
            <div>                
                <IF condition={this.state.slides.length > 0}>
                    <SimpleSlider {...settings}>                
                        {items}
                    </SimpleSlider>
                </IF>
            </div>
        );
    }
});


module.exports = SliderView;
