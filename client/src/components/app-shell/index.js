(function(angular){
    angular.module('ClientBoilerplate')
    .controller('AppShellComponentController', ['$scope', require('./app-shell.controller')])
    .directive('clientBoilerplate', require('./app-shell.directive'));
})(window.angular); 