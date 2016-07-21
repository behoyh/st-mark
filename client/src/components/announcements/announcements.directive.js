module.exports = announcements;

announcements.$inject = [];
function announcements(){
    let directive = {
        restrict: 'AE',
        scope: { },
        link: link,
        templateUrl: 'src/components/announcements/announcements.html',
        controller: 'AnnouncementsController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;

    function link(scope, element, attrs, controller){

    }
}