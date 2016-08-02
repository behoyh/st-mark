module.exports = guestsListService;

guestsListService.$inject = ['$firebaseArray', '$log', '$q'];
function guestsListService($firebaseArray, $log, $q){

    let ref = firebase.database().ref('/guests');
    let list = $firebaseArray(ref);

    let service = {
        getGuests
    }

    return service;

    function getGuests(){
        let deferred = $q.defer();
        list.$loaded()
            .then(function(guests) {
                deferred.resolve(guests);
            })
            .catch(function(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }
}