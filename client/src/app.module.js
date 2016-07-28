/** style guide
 * an opinionated style guide with the best of the two worlds
 * https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
 * https://github.com/johnpapa/angular-styleguide/blob/master/a2/README.md
 */

(function(angular){
    'use strict';

    angular
        .module('st-mark', [
            'guests-list',
            'event-form',
            'announcements',                // announcements
            'login',
            'LocalForageModule',            // off-line storage
            'firebase',                     // firebase
            'ngAria',                       // accessibility
            'ngSanitize',
            'ngMessages',                   // client messages
            'ngAnimate',                    // animation
            'ngRoute',                      // routing
            'ngMaterial'                    // angular material design
        ]);

    require('./app.config')(); // app config

    require('./components');
    require('./components/shared');
    require('./components/login');
    require('./components/announcements');
    require('./components/event-form');
    require('./components/guests-list');

})(window.angular);