module.exports = routes;

function routes($routeProvider, $locationProvider){
    return $routeProvider
        .when('/index', {
            templateUrl: 'src/components/landing.html',
            controller: 'LandingController',
            controllerAs: 'vm'
        })
        .when('/login', {
            templateUrl: 'src/components/login/login.html',
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .when('/guests-list', {
            templateUrl: 'src/components/guests-list/guests-list.html',
            controller: 'GuestsListController',
            controllerAs: 'vm'
        })
        .when('/event-form', {
            templateUrl: 'src/components/event-form/event-form.html',
            controller: 'EventFormController',
            controllerAs: 'vm'
        })

        .otherwise({ redirectTo: '/index' });

}