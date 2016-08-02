(function(angular){
    angular
        .module('guests-list', [])
        .controller('GuestsListController', require('./guests-list.controller'))
        .directive('guestsList', require('./guests-list.directive'))
        .factory('guestsListService', require('./guests-list.service'));
})(window.angular);
