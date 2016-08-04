module.exports = EventFormController;

EventFormController.$inject = ['eventFormService', '$mdDialog', '$location'];
function EventFormController(eventFormService, $mdDialog, $location){
    let vm = this;
    
    vm.submitGuestForm = submitGuestForm;

    function submitGuestForm(ev, guest){
            eventFormService.submitGuestForm(guest);
            confirmation(ev, 'You are now registered.');
    }

    function confirmation(ev, msg){
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Confirmation')
                .textContent(msg)
                .ariaLabel('Guest registered')
                .ok('Got it!')
                .targetEvent(ev)
            ).then(() => $location.url('/'));
    }
}
