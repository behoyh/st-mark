module.exports = AnnouncementsController;

AnnouncementsController.$inject = ['$location', '$mdDialog'];
function AnnouncementsController($location, $mdDialog){
    let vm = this;

    vm.notes = notes;

    function notes(ev, guest){
        let confirm = $mdDialog.confirm()
          .title('Notes')
          .textContent(`
            No children under the age of 13 will be permitted in the retreat . Child care and activities are available for children ages 4 to 12 on Friday, Sept 2. Registration is required for childcare.

            All events will be held at St. Mary & St. Philopateer Church and lectures will be given in Arabic

            Live streaming will be available for all events for those who cannot attend

            Pre-registration is required

            A donation of $10 a person is suggested.
          `)
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