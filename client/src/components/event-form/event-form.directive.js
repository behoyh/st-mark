module.exports = eventForm;

eventForm.$inject = [];
function eventForm(){
    let directive = {
        restrict: 'AE',
        templateUrl: 'src/components/event-form/event-form.html',
        controller: 'EventFormController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;
}