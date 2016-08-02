(function(angular){
    angular
        .module('st-mark')
        .factory('authService', require('./auth.service'))
        .factory('userControlsService', require('./user-controls.service'));
})(window.angular);