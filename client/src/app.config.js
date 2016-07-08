module.exports = config;

function config($routeProvider, $locationProvider){
    angular.module('ClientBoilerplate')
        .config(configApp);

        configApp.$inject = ['$routeProvider', '$locationProvider'];
        function configApp($routeProvider, $locationProvider) {
            require('./app.routes')($routeProvider, $locationProvider); // app routes
        };

}