(function(angular){
    angular
        .module('login', [])
        .controller('LoginController', require('./login.controller'))
        .directive('login', require('./login.directive'));
})(window.angular);