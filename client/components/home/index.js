(function(angular){
    angular.module('ClientBoilerplate')
    .controller('HomeComponentController', ['$scope', require('./home-component.controller')])
    .directive('clientBoilerplate', require('./home-component.directive'));
})(window.angular); 