module.exports = LayoutController;

LayoutController.$inject = ['$mdSidenav', '$log'];
function LayoutController($mdSidenav, $log) {
    let vm = this;

    vm.title = "Client Boilerplate!";

    vm.close = function () {
        $mdSidenav('left').close()
                .then(function () {
                $log.debug("close LEFT is done");
            });
        };

}