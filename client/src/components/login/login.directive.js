module.exports = login;

login.$inject = [];
function login(){
    let directive = {
        restrict: 'AE',
        templateUrl: 'src/components/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        bindToController: true
    }

    return directive;
}