(function(angular){
    angular
        .module('event-form', [])
        .controller('EventFormController', require('./event-form.controller'))
        .directive('eventForm', require('./event-form.directive'))
        .factory('eventFormService', require('./event-form.service'));
})(window.angular);