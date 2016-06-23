(function(angular){
    angular.module('child-component', [])
    .controller('ChildComponentController', ['$scope', require('./child-component.controller')])
    .directive('childComponent', require('./child-component.directive'));
})(window.angular);