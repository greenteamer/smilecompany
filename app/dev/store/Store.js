var Dispatcher = require('../dispatcher/Dispatcher.js');
var MicroEvent = require('microevent');
var merge = require('merge');
var $ = require('jquery');
var Cookies = require('js-cookie');


var Store = merge(MicroEvent.prototype, {

    employees: [],
    changeEmployees: function(){
        this.trigger('changeEmployees');
    },

    slides: [],
    slidesTrigger: function () {
        this.trigger('slidesTrigger');
    },

    directions: [],
    directionsTrigger: function () {
        this.trigger('directionsTrigger');  
    },

    advantages: [],
    advantagesTrigger: function () {
        this.trigger('advantagesTrigger');
    },

    portfolio: [],
    portfolioTrigger: function () {
        this.trigger('portfolioTrigger');
    }
});


Dispatcher.register(function (payload) {
    switch (payload.actionType) {

        // получение коллекций
        case 'get-emploees':
            $.ajax({
	            url: '/api/v1/employees',
	            dataType: 'json',
	        })
	        .done(function(data) {
	            Store.employees = data; 
	            Store.changeEmployees();          
	        })
	        .fail(function() {
	            console.log("error");
	        })
	        .always(function() {
	            console.log("complete");
	        });
            break;

       	case 'get-articles':
            
            console.log('test 3');

            break;

        case 'get-pages':
            console.log('test 2');
            break;

        case 'get-slides':
            console.log('despathcer ajax get slides start');
            $.ajax({
                url: '/api/v1/slides',
                dataType: 'json',
            })
            .done(function(data) {
                console.log('slides data from ajax: ', data);
                Store.slides = data;
                Store.slidesTrigger();
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            break;

        case 'get-directions':
            $.ajax({
                url: '/api/v1/directions',
                dataType: 'json',
            })
            .done(function(data) {
                console.log('directions data from ajax: ', data);
                Store.directions = data;
                Store.directionsTrigger();
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            break;

        case 'get-advantages':
            $.ajax({
                url: '/api/v1/advantages',
                dataType: 'json',
            })
            .done(function(data) {
                console.log('advantages data from ajax: ', data);
                Store.advantages = data;
                Store.advantagesTrigger();
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            break;

        case 'get-portfolio':
            $.ajax({
                url: '/api/v1/portfolio',
                dataType: 'json',
            })
            .done(function(data) {
                console.log('Dispatcher get portfolio data from ajax: ', data);
                Store.portfolio = data;
                Store.portfolioTrigger();
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
            break;
        //конец получения коллекций           

        default:
            console.log('default dispatcher');
    };
    return true;

});


module.exports = Store;
