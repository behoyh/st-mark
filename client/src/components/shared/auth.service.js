module.exports = authService;

authService.$inject = ['$q', '$log', '$firebaseAuth'];
function authService($q, $log, $firebaseAuth){
    let authObj = $firebaseAuth();

    let service = {
        auth
    }

    return service;

    function auth(){
        let deferred = $q.defer();
        authObj.$onAuthStateChanged(user => {
            if (user) {
                deferred.resolve(user);
            } else {
                deferred.reject(user);
            }
        });
        return deferred.promise;
    }

}