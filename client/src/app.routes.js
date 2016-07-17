module.exports = routes;

function routes($routeProvider, $locationProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'src/components/landing.html',
            controller: 'LandingController',
            controllerAs: 'vm'
        })
        
        .otherwise({ redirectTo: '/index' });
}