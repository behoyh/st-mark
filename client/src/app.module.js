/** style guide
 * an opinionated style guide with the best of the two worlds
 * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 * https://github.com/johnpapa/angular-styleguide/blob/master/a2/README.md
 */

(function(angular){
    'use strict';

    angular
        .module('Ng1GoogliciousBoilerplate', [
            'nested-component',             // nested component
            'component',                    // component
            'LocalForageModule',            // off-line storage
            'ngAria',                       // accessibility
            'ngSanitize',
            'ngMessages',                   // client messages
            'ngAnimate',                    // animation
            'ngRoute',                      // routing
            'ngMaterial'                    // angular material design
        ]);

    require('./app.config')(); // app config and routes included

    require('./components/layout'); // app shell
    require('./components/component');
    
})(window.angular);