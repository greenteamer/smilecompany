var Dispatcher = require('../dispatcher/Dispatcher.js');
var MicroEvent = require('microevent');
var merge = require('merge');
var $ = require('jquery');
var Cookies = require('js-cookie');


var Store = merge(MicroEvent.prototype, {

    employees: [],

    changeEmployees: function(){
        this.trigger('changeEmployees');
    }
});


Dispatcher.register(function (payload) {
    switch (payload.actionType) {

        // изменение отображения компонентов
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
        //конец изменения отображения компонентов              

        default:
            console.log('default dispatcher');
    };
    return true;

});


module.exports = Store;
