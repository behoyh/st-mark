module.exports = routes;

function routes($routeProvider, $locationProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'src/components/layout/layout.html',
            controller: 'LayoutController',
            controllerAs: 'vm'
        })
        
        .otherwise({ redirectTo: '/index' });
}