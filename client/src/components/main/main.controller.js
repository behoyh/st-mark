module.exports = MainController;

MainController.$inject = ['$mdSidenav', '$log', '$timeout'];
function MainController($mdSidenav, $log, $timeout) {
    let vm = this;

    vm.brand = "Googlicious!";
    vm.close = close;
    vm.toggleLeft = buildDelayedToggler();

    function close() {
        $mdSidenav('left').close()
            .then(function () {
            $log.debug("close LEFT is done");
        });
    }
    
    function buildDelayedToggler() {
        return debounce(function() {
            $mdSidenav('left')
                .toggle()
                .then(function () {
                    $log.debug("toggle left is done");
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

}