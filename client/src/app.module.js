/** style guide
 * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 */

(function(angular){
    'use strict';

    angular
        .module('ClientBoilerplate', [
            'nested-component',             // nested component
            'component',                    // component
            'LocalForageModule',            // off-line storage   
            'ngRoute'                       // routing
        ]);

    require('./app.config')(); // app config and routes included

    require('./components/layout'); // app shell
    require('./components/component');
    
})(window.angular);