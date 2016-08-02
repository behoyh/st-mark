module.exports = EventFormController;

EventFormController.$inject = ['eventFormService', '$mdDialog', '$location'];
function EventFormController(eventFormService, $mdDialog, $location){
    let vm = this;
    
    vm.ages = [4, 5, 6, 7, 8, 9, 10, 11, 12];

    vm.submitGuestForm = submitGuestForm;

    function submitGuestForm(ev, guest){
        if (!guest.kids) {
            eventFormService.submitGuestForm(guest);
            confirmation(ev, 'You are now registered.');
        } else {
            footnotes(ev, guest);
        }
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
        ;
    }

    function footnotes(ev, guest){
        let confirm = $mdDialog.confirm()
          .title('Agreemnet')
          .textContent(`
            PARENTS MUST SUPPLY LUNCH FOR THEIR CHILDREN.

            WE CANNOT ADMINISTER ANY MEDICATION. IF YOUR CHILD NEEDS MEDICATION DURING THE DAY, PARENTS WILL BE RESPONSIBLE.

            AT LEAST ONE PARENT MUST REMAIN PRESENT AT CHURCH DURING RETREAT.
          `)
          .ariaLabel('Agreemnet')
          .targetEvent(ev)
          .ok('I agree')
          .cancel('I do not agree');

        $mdDialog.show(confirm).then(function() {
            eventFormService.submitGuestForm(guest);
            confirmation(ev, 'You are now registered.');
        }, function() {
            confirmation(ev, 'Sorry to see you go.');
        });
    }
}