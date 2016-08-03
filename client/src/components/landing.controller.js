module.exports = LandingController;

LandingController.$inject = ['$rootScope', '$mdSidenav', '$log', '$timeout', '$location', 'userControlsService', 'authService', '$route', '$mdDialog'];
function LandingController($rootScope, $mdSidenav, $log, $timeout, $location, userControlsService, authService, $route, $mdDialog) {
    let vm = this;

    vm.brand = "Fr. Daoud Lamei Spiritual Retreat";
    vm.title = "" ;
    vm.close = close;
    vm.toggleLeft = buildDelayedToggler();
    vm.navigateTo = navigateTo;
    vm.logout = logout;

    activate();

    function activate(){
        authService.auth()
            .then(user => $rootScope.user = user.uid);
    }

    function close() {
        $mdSidenav('left').close()
            .then(function () {
            $log.info("close LEFT is done");
        });
    }
    
    function buildDelayedToggler() {
        return debounce(function() {
            $mdSidenav('left')
                .toggle()
                .then(function () {
                    $log.info("toggle left is done");
                });
            }, 200);
    }

    function debounce(func, wait, context) {
        let timer;
        return function debounced() {
            let context = vm,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
            timer = undefined;
            func.apply(context, args);
            }, wait || 10);
        };
    }

    function navigateTo(place) {
        $location.url(place);
    }

    function logout(){
        userControlsService.logout();
        $rootScope.user = '';
        $route.reload();
    }

    vm.notes = notes;

    function notes(ev, guest){
        let confirm = $mdDialog.confirm()
          .title('Notes')
          .textContent('No children under the age of 13 will be permitted in the retreat. Child care and activities are available for children ages 4 to 12 on Friday, Sept 2. Registration is required for childcare. All events will be held at St. Mary & St. Philopateer Church and lectures will be given in Arabic. Live streaming will be available for all events for those who cannot attend. Pre-registration is required. A donation of $10 a person is suggested.')
          .targetEvent(ev)
          .ok('I understand')
          .cancel('Cancel');

        $mdDialog.show(confirm).then(function() {
            $location.url('/event-form');
        }, function() {

        });
    }

}
