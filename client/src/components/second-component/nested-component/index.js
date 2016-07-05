(function(angular){
    angular.module('nested-component', [])
    .controller('NestedComponentController', ['$scope', require('./nested-component.controller')])
    .directive('nestedComponent', require('./nested-component.directive'));
})(window.angular)