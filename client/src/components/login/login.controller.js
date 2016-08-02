module.exports = loginController;

loginController.$inject = ['userControlsService', 'authService', '$location', '$log', '$mdToast'];
function loginController(userControlsService, authService, $location, $log, $mdToast){
    let vm = this;
    
    vm.login = login;

    activate();

    function activate(){
        authService.auth()
                .then(user => $location.url('/'),
                    error => $log.info('please login...'));
    }

    function login(user){
        userControlsService.login(user);
    }

}