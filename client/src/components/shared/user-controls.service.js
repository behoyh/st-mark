module.exports = userControlsService;

userControlsService.$inject = ['$firebaseAuth', '$log', '$location', '$mdToast'];
function userControlsService($firebaseAuth, $log, $location, $mdToast){
    let authObj = $firebaseAuth();

    let service = {
        login,
        logout
    }

    return service;

    function login(user){
        authObj.$signInWithEmailAndPassword(user.email, user.password)
            .then(function(firebaseUser) {
                $log.info("Signed in as:", firebaseUser.uid);
                $location.url('/');
            }).catch(function(error) {

                $mdToast.show(
                    $mdToast.simple()
                        .textContent(error.message)
                        .position('top right')
                        .hideDelay(3000)
                    );

                $log.error("Authentication failed:", error);
            });
    }

    function logout(){
        authObj.$signOut();
    }
}