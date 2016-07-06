(function(angular){
    
    var app = angular.module('ClientBoilerplate', [
        'nested-component',             // nested component
        'second-component',             // child component
        'LocalForageModule',            // off-line storage   
        'ngRoute'                       // routing
    ]);

    app.config(['$routeProvider', '$locationProvider', 
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: 'src/components/app-shell/app-shell.html',
                    controller: 'AppShellComponentController'
                })
                
                .otherwise({ redirectTo: '/index' });
        }]);

    require('./components/app-shell');
    require('./components/second-component');
    
})(window.angular);
