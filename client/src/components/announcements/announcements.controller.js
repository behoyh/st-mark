module.exports = AnnouncementsController;

AnnouncementsController.$inject = ['$location', '$mdDialog'];
function AnnouncementsController($location, $mdDialog){
    let vm = this;

    vm.notes = notes;

    function notes(ev, guest){
        let confirm = $mdDialog.confirm()
          .title('Notes')
          .textContent(`No children under the age of 13 will be permitted in the retreat.
           All events will be held at St. Mary & St. Philopateer Church. Pre-registration is required
           with a donation of $10 per person. Live streaming will be available for all events
           for those who cannot attend at www.stmarkmi.org. Donation can be paid thru paypal by clicking
           on the donate button in the upper left hand corner.`)
          .ariaLabel('Notes')
          .targetEvent(ev)
          .ok('I understand')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            $location.url('/event-form');
        }, function() {
            $location.url('/');
        });
    }

}
