import '../services/animationServices.js';
import '../js/angular-scroll-animate.js';
import '../services/dataServices.js';

(function () {

  const app = angular.module('infoModule', ['services', 'dataServices']);
  app.controller("InfoControler", ['$scope', '$routeParams', '$window', '$anchorScroll', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $routeParams, $window, $anchorScroll, $q, AnimationInOut, GetArtDatas) {
    'ngInject';

    // Manage mobile
    var screenWidth = $window.innerWidth;
    $window.record = $scope;
    $scope.isDesktop = function () {
      return $window.outerWidth > 700;
    }
    $anchorScroll();

     // Manage animation
    $scope.animObject = AnimationInOut;
    $scope.notMobileAnimation = true;
    AnimationInOut.start($scope);

    // Get param from url
    let messageComplet = $routeParams.msg.split("-");
    this.message = messageComplet[0];
    $scope.message = messageComplet[0];
    $scope.id = messageComplet[1];

    // Get datas for view
    let thisEvent = GetArtDatas.getEvent($scope.id).then(function(data){
       $scope.evt = data;
       $scope.getHeroClass = function (page) {
          return "hero-" + $scope.message;
       }
    });
  }]);
})();