module.exports = eventFormService;

eventFormService.$inject = ['$firebaseArray', '$log'];
function eventFormService($firebaseArray, $log){

    let ref = firebase.database().ref('/guests');
    let list = $firebaseArray(ref);

    let service = {
        submitGuestForm
    }

    return service;

    function submitGuestForm(guest){
        list.$add(guest)
            .then(response => $log.info('guest saved'));
    }
}