angular

.module('starter', [
    'ui.router',
    'famous.angular',
    'appControllers'
])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}])

.config(['$urlRouterProvider', '$stateProvider', function ($urlRouteProvider, $stateProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
            
        })
    
    $urlRouteProvider.otherwise('/');
}])

;