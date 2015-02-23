angular

.module('starter', [
    'ui.router'
])

/*.config(['$urlRouterProvider', '$stateProvider', function ($urlRouteProvider, $stateProvider) {
    $urlRouteProvider.otherwise('/');
}])*/

/*.run(function () {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
})

.config(['$routeProvider',
    function($routeProvider) {
    
    var template = function (url) {
        return 'templates/' + url.replace(/\./g, '/') + '.html';
    };
    
    $routeProvider
    
    .when('/first', {
        url: '/first',
        templateUrl: template('app.first'),
        controller: 'appFirstCtrl'
    });
    
    
    $urlRouterProvider.otherwise('/first');
}]);*/