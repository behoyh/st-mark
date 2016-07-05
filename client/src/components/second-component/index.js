(function(angular){
    angular.module('second-component', [])
    .controller('SecondComponentController', ['$scope', require('./second-component.controller')])
    .directive('secondComponent', require('./second-component.directive'));
})(window.angular);