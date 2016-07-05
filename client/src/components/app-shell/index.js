(function(angular){
    angular.module('ClientBoilerplate')
    .controller('AppShellComponentController', ['$scope', require('./app-shell-component.controller')])
    .directive('clientBoilerplate', require('./app-shell-component.directive'));
})(window.angular); 