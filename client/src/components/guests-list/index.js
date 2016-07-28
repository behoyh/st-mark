(function(angular){
    angular
        .module('guests-list', [])
        .controller('GuestsListController', require('./guests-list.controller'))
        .directive('guestsList', require('./guests-list.directive'));
})(window.angular);
