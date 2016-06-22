(function(angular){
    
    var app = angular.module('ClientBoilerplate', [
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
    
})(window.angular);
