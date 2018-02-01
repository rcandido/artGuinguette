import {
  defaultAgenda,
  rempliMoiCa
} from '../js/filedData';
import '../services/animationServices.js';
import '../js/angular-scroll-animate.js';

(function () {
  const app = angular.module('agendaEvenementModule', ['angular-scroll-animate', 'services', 'ngSanitize']);

  app.controller("EvtController", ['$scope', 'AnimationInOut', function ($scope, AnimationInOut) {
    $scope.animObject = AnimationInOut;
    $scope.anim = $scope.animObject.turnInOn();
    $scope.animateElementIn = $scope.animObject.animateElementIn;
    $scope.animateElementOut = $scope.animObject.animateElementOut;
    $scope.limit = 10;

    let agendaComplet = rempliMoiCa({});

    let evtPast = agendaComplet.avant;
    let evtFuture = agendaComplet.apres;

    let agenda = evtPast;
    let agendaArray = new Array();
    let jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    let moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
    let leJour = jourDay[agenda[0].date.getDate()];
    let leMois = moisMonth[agenda[0].date.getMonth()];

    $scope.eventLabel = {
      before: `C'est trop tard mais il est encore temps de jeter un oeil`,
      after: `A noter sur vos agendas`
    };
    $scope.agendaAnterieur = evtPast;
    $scope.agendaPosterieur = evtFuture;

  }]);

  app.directive("artEvenement", function ($rootScope) {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        currentAgenda: '=askedAgenda'
      },
      templateUrl: 'app/layout/tmpl/agendaEvent.html'
    };
  });
})();