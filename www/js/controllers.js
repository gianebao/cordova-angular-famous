angular.module('appControllers', [])

.controller('homeCtrl', ['$scope', '$famous', function ($scope, $famous) {
   var Transitionable = $famous['famous/transitions/Transitionable'];
    var Easing = $famous['famous/transitions/Easing'];
    
    $scope.myGridLayoutOptions = {
      dimensions: [2, 3]
    };
    
    $scope.list = [
      {content:"hello", bgColor: "#b58900", rotate: new Transitionable(0)},
      {content:"world", bgColor: "#cb4b16", rotate: new Transitionable(0)},
      {content: "famous", bgColor: "#dc322f", rotate: new Transitionable(0)},
      {content: "angular", bgColor: "#d33682", rotate: new Transitionable(0)},
      {content: "is", bgColor: "#6c71c4", rotate: new Transitionable(0)},
      {content: "cool!", bgColor: "#268bd2", rotate: new Transitionable(0)}
    ];
    
    $scope.animate = function() {
      for (var i = 0; i < $scope.list.length; i++) {
        $scope.list[i].rotate.set(Math.PI * 4, {curve: Easing.inOutElastic, duration: 3000 * i}) 
      };
    };
 
    $scope.animate();
}])

.controller('aboutCtrl', function ($scope) {

})

;