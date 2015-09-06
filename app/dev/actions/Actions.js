var Dispatcher = require('../dispatcher/Dispatcher.js');


var Actions = {
    getEmployees: function() {    	
        Dispatcher.dispatch({
            actionType: "get-emploees"
        });
    },
    getPages: function() {
    	console.log('action start 2');
        Dispatcher.dispatch({
            actionType: "get-pages"
        });
    },
    getArticles: function() {
    	console.log('action start 2');
        Dispatcher.dispatch({
            actionType: "get-articles"
        });
    },
    getSlides: function () {
        console.log('action get slides');
        Dispatcher.dispatch({
            actionType: "get-slides"
        });
    },
    getDirections: function () {
        Dispatcher.dispatch({
            actionType: "get-directions"
        });  
    },
    getAdvantages: function () {
        Dispatcher.dispatch({
            actionType: "get-advantages"
        });  
    },
    getPortfolio: function () {
        Dispatcher.dispatch({
            actionType: "get-portfolio"
        });    
    }
};


module.exports = Actions;
