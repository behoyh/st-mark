(function(angular){
    angular
        .module('Ng1GoogliciousBoilerplate')
        .controller('LayoutController', require('./layout.controller'))
        .directive('ng1GoogliciousBoilerplate', require('./layout.directive'));
})(window.angular);
