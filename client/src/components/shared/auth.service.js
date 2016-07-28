module.exports = authService;

authService.$inject = ['$q', '$log'];
function authService($q, $log){
    let service = {
        auth,
        logout
    }

    return service;

    function auth(){
        let deferred = $q.defer();
        firebase.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    deferred.resolve(user);
                } else {
                    deferred.reject(user);
                }
        });
        return deferred.promise;
    }

    function logout(){
        firebase.auth().signOut()
            .then(() => $log.debug('user logout'),
                  error => $log.debug(error));
    }
}