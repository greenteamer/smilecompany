var Dispatcher = require('../dispatcher/Dispatcher.js');


var Store = {

}


Dispatcher.register(function (payload) {
    switch (payload.actionType) {

        // изменение отображения компонентов
        case 'get-emploees':
            console.log('Dispatcher.register get-employees');
            break;

        case 'get-pages':
            console.log('Dispatcher.register get-employees');
            break;
        //конец изменения отображения компонентов       

        default:
            console.log('default dispatcher');
    };
    return true;

});


module.exports = Store;
