(function(angular){
    
    var app = angular.module('ClientBoilerplate', [
        'ngRoute'           // routing
    ]);

    app.config(['$routeProvider', '$locationProvider', 
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController'
                })
                
                .otherwise({ redirectTo: '/home' });
        }]);

    require('./components/home');
    
})(window.angular);
