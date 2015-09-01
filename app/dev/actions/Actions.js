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
    }
};


module.exports = Actions;
