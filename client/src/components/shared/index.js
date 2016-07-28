(function(angular){
    angular
        .module('st-mark')
        .factory('authService', require('./auth.service'));
})(window.angular)