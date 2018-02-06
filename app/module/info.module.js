import '../services/animationServices.js';
import '../js/angular-scroll-animate.js';
import '../services/dataServices.js';
import {
  getEvent
} from '../js/dataProcessing.js';

(function () {

  const app = angular.module('infoModule', ['services', 'dataServices']);
  app.controller("InfoControler", ['$scope', '$routeParams', '$window', '$anchorScroll', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $routeParams, $window, $anchorScroll, $q, AnimationInOut, GetArtDatas) {
    'ngInject';

    var screenWidth = $window.innerWidth;
    $window.record = $scope;
    $scope.isDesktop = function () {
      return $window.outerWidth > 700;
    }

    $anchorScroll();
    $scope.animObject = AnimationInOut;
    $scope.anim = $scope.animObject.turnInOn();

    $scope.animateElementIn = $scope.isDesktop ? $scope.animObject.animateElementIn : function () {
      return false
    };
    $scope.animateElementOut = $scope.isDesktop ? $scope.animObject.animateElementOut : function () {
      return false
    };

    let messageComplet = $routeParams.msg.split("-");
    this.message = messageComplet[0];
    $scope.message = messageComplet[0];
    $scope.id = messageComplet[1];

    var Regions = GetArtDatas.getEvents();
    $scope.regions = Regions.query();


    let thisEvent = GetArtDatas.getEvent($scope.id);

    $scope.evt = thisEvent.get();



    $scope.evt.$promise.then(function (data) {
      $scope.evt = getEvent($scope.id, $scope.evt);
      $scope.getHeroClass = function (page) {
        return "hero-" + $scope.message;
      }

    });

  }]);
})();