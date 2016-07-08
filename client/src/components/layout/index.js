(function(angular){
    angular.module('ClientBoilerplate')
    .controller('LayoutController', require('./layout.controller'))
    .directive('clientBoilerplate', require('./layout.directive'));
})(window.angular);
