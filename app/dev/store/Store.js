var Dispatcher = require('../dispatcher/Dispatcher.js');


Dispatcher.register(function (payload) {
	switch (payload.actionType) {
		case 'get-employees':
			console.log('Dispatcher.register get-employees');
			break;
	};

	return true;
});