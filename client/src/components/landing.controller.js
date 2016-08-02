module.exports = LandingController;

LandingController.$inject = ['$rootScope', '$mdSidenav', '$log', '$timeout', '$location', 'userControlsService', 'authService', '$route'];
function LandingController($rootScope, $mdSidenav, $log, $timeout, $location, userControlsService, authService, $route) {
    let vm = this;
    
    vm.brand = "St Mark";
    vm.title;
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
        $log.info(`go to ${place}`);
        $location.url(`/${place}`);
    }

    function logout(){
        userControlsService.logout();
        $rootScope.user = '';
        $route.reload();
    }

}