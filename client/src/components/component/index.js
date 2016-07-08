(function(angular){
    angular
        .module('component', [])
        .controller('SecondComponentController', require('./component.controller'))
        .directive('component', require('./component.directive'));
})(window.angular);

require('./nested-component');