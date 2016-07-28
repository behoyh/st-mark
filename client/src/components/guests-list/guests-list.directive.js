module.exports = guestsList;

guestsList.$inject = [];
function guestsList(){
    let directive = {
        restrict: 'AE',
        templateUrl: 'src/components/guests/guests.html',
        scope: { },
        controller: 'GuestsController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;
}