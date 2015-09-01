var Dispatcher = require('../dispatcher/Dispatcher.js');


var Actions = {
	getEmployees: function  () {
		Dispatcher.dispatch({
			actionType: 'get-emploees'		
		});		
	},
	getPages: function  () {
		Dispatcher.dispatch({
			actionType: 'get-pages'		
		});		
	}
}


module.exports = Actions;
