module.exports = routes;

function routes($routeProvider, $locationProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'src/components/landing.html',
            controller: 'LandingController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'src/components/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm',
            resolve: {
                user: checkUserForLoginRoute 
            }
        })
        .when('/guests-list', {
            templateUrl: 'src/components/guests-list/guests-list.html',
            controller: 'GuestsListController',
            controllerAs: 'vm',           
            resolve: {
                user: getUser
            }
        })
        .when('/event-form', {
            templateUrl: 'src/components/event-form/event-form.html',
            controller: 'EventFormController',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/index' });


    getUser.$inject = ['authService'];
    function getUser(authService){
        return authService.auth();
    }

    checkUserForLoginRoute.$inject = ['authService', '$location'];
    function checkUserForLoginRoute(authService, $location){
        authService.auth()
            .then(user => {
                if (user.uid) return $location.url('/index');
            }, error =>  error);
        
    }
}