import {
  defaultAgenda,
  rempliMoiCa
} from '../js/filedData';
import '../services/animationServices.js';

const appEvt = angular.module('agendaEvenementModule', ['angular-scroll-animate', 'services']);

appEvt.controller("EvtController", ['$scope', 'AnimationInOut', function ($scope, AnimationInOut) {
  $scope.animObject = AnimationInOut;
  $scope.anim = $scope.animObject.turnInOn();
  $scope.animateElementIn = $scope.animObject.animateElementIn;
  $scope.animateElementOut = $scope.animObject.animateElementOut;
  $scope.limit = 10;

  let agendaComplet = rempliMoiCa({});

  let evtPasse = agendaComplet.avant;
  let evtVenir = agendaComplet.apres;

  let agenda = evtPasse;
  let agendaArray = new Array();
  let jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  let moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
  let leJour = jourDay[agenda[0].date.getDate()];
  let leMois = moisMonth[agenda[0].date.getMonth()];

  $scope.libele = {
    avant: "Évènements antérieurs",
    apres: "Évènements postérieurs"
  };
  $scope.agendaAnterieur = evtPasse;
  $scope.agendaPosterieur = evtVenir;

}]);



appEvt.directive("artEvenement", function ($rootScope) {

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