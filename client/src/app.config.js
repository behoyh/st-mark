module.exports = config;

function config($routeProvider, $locationProvider){
    angular
        .module('Ng1GoogliciousBoilerplate')
        .config(configApp);

        configApp.$inject = ['$routeProvider', '$locationProvider'];
        function configApp($routeProvider, $locationProvider) {
            require('./app.routes')($routeProvider, $locationProvider); // app routes
        };

}