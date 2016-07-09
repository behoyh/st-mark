module.exports = routes;

function routes($routeProvider, $locationProvider){
    $routeProvider
        .when('/index', {
            templateUrl: 'src/components/component/component.html',
            controller: 'ComponentController',
            controllerAs: 'vm'
        })
        
        .otherwise({ redirectTo: '/index' });
}