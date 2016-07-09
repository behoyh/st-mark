(function(angular){
    angular
        .module('component', [])
        .controller('ComponentController', require('./component.controller'))
        .directive('component', require('./component.directive'));
})(window.angular);

require('./nested-component');