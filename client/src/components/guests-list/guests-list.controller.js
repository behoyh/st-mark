module.exports = GuestsListController;

GuestsListController.$inject = ['$rootScope', '$scope', 'guestsListService', '$log', '$location', '$mdDialog', '$mdMedia'];
function GuestsListController($rootScope, $scope, guestsListService, $log, $location, $mdDialog, $mdMedia){
    if (!$rootScope.user) $location.url('/');

    let vm = this;

    vm.guests;
    vm.showSelectedGuest = showSelectedGuest;

    activate();

    function activate(){
        guestsListService.getGuests()
            .then(guests => vm.guests = guests,
                  error => $log.debug(error));
    }

    function selectGuest(guest){
        vm.selectedGuest = guest;
    }

    function showSelectedGuest(ev, guest, index) {
        let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
        let selectedGuest = guest;
        let guestIndex = index;

        $mdDialog.show({
            controller: ['$scope', '$firebaseArray', '$log', '$mdDialog', 
                function($scope, $firebaseArray, $log, $mdDialog){

                $scope.selectedGuest = selectedGuest;
                $scope.ages = [4, 5, 6, 7, 8, 9, 10, 11, 12];

                $scope.cancel = function() {
                    $mdDialog.cancel();
                };

                $scope.checkIn = function() {
                    let ref = firebase.database().ref('/guests');
                    var list = $firebaseArray(ref);
                    list.$loaded()
                        .then(function() {
                            list[guestIndex].checkedIn = true;
                            list.$save(guestIndex)
                                .then(function() {
                                    $mdDialog.hide();
                                });
                        })
                        .catch(error => $log.debug(error));
                };

                $scope.unCheckIn = function(){
                    let ref = firebase.database().ref('/guests');
                    var list = $firebaseArray(ref);
                    list.$loaded()
                        .then(function() {
                            list[guestIndex].checkedIn = false;
                            list.$save(guestIndex)
                                .then(function() {
                                    $mdDialog.hide();
                                });
                        })
                        .catch(error => $log.debug(error));
                }

            }],
            templateUrl: 'src/components/guests-list/templates/guest.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: useFullScreen
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
            
            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });
    };

}