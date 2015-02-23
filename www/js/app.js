angular

.module('starter', [
    'ui.router',
    'appControllers'
])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}])

.config(['$urlRouterProvider', '$stateProvider', function ($urlRouteProvider, $stateProvider) {
    $urlRouteProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/header.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'template/about.html'
        })
    
}])

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