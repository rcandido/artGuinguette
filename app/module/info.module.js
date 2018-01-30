import '../services/animationServices.js';
import '../js/angular-scroll-animate.js';
import {
	defaultAgenda,
  rempliMoiCa,
  agendaComplet,
  getAgenda
} from '../js/filedData';

const app = angular.module('infoModule', ['services']);
// 'angular-scroll-animate', 'services', 'ngSanitize'
app.controller("InfoControler", ['$scope', '$routeParams', '$window', '$anchorScroll', 'AnimationInOut', function ($scope, $routeParams, $window, $anchorScroll, AnimationInOut) {
  'ngInject';
  $window.record = $scope;
  $scope.isDesktop = function() {
    return $window.outerWidth > 700;
  }
  var screenWidth = $window.innerWidth;

  $anchorScroll();
  $scope.animObject = AnimationInOut;
  $scope.anim = $scope.animObject.turnInOn();

  $scope.animateElementIn = $scope.isDesktop ? $scope.animObject.animateElementIn: function () {alert("non");return false};
  $scope.animateElementOut =  $scope.isDesktop ? $scope.animObject.animateElementOut: function () {alert("non");return false};



  let messageComplet= $routeParams.msg.split("-");
  this.message = messageComplet[0];
  $scope.message =  messageComplet[0];
  $scope.id =  messageComplet[1];
  
  $scope.evt = getAgenda($scope.id);
  $scope.getHeroClass = function(page) {
      return "hero-" + $scope.message;
  }
}]);
