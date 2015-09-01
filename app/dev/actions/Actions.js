var Dispatcher = require('../dispatcher/Dispatcher.js');


var Actions = {
	getEmployees: function  () {
		console.log('Actions getEmployees');		
		Dispatcher.dispatch({
            actionType: 'get-emploees'
        });
        console.log('Actions getEmployees2');
	},
	getPages: function  () {
		Dispatcher.dispatch({
			actionType: 'get-pages'		
		});		
	}
}


module.exports = Actions;
