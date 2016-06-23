(function(angular){
    
    var app = angular.module('ClientBoilerplate', [
        'child-component',              // child component
        'LocalForageModule',            // off-line storage   
        'ngRoute'                       // routing
    ]);

    app.config(['$routeProvider', '$locationProvider', 
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeComponentController'
                })
                
                .otherwise({ redirectTo: '/home' });
        }]);

    require('./components/home');
    require('./components/child-component');
    
})(window.angular);
