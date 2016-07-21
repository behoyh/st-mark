(function(angular){
    angular
        .module('announcements', [])
        .controller('AnnouncementsController', require('./announcements.controller'))
        .directive('announcements', require('./announcements.directive'));
})(window.angular);