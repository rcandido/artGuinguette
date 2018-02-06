import {
  transformAgenda
} from '../js/dataProcessing.js';
import '../services/animationServices.js';
import '../services/dataServices.js';
import '../js/angular-scroll-animate.js';

(function () {
  const app = angular.module('agendaEvenementModule', ['angular-scroll-animate', 'services', 'dataServices', 'ngSanitize']);

  app.controller("EvtController", ['$scope', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $q, AnimationInOut, GetArtDatas) {
    $scope.animObject = AnimationInOut;
    $scope.anim = $scope.animObject.turnInOn();
    $scope.animateElementIn = $scope.animObject.animateElementIn;
    $scope.animateElementOut = $scope.animObject.animateElementOut;
    $scope.limit = 10;
    $scope.evtTitleAfter = `A noter sur vos agendas`;
    $scope.evtTitleBefore = `C'est trop tard mais il est encore temps de jeter un oeil`;
    $scope.agendaAnterieur = [];
    $scope.agendaPosterieur = [];
   // var cetAgenda = GetArtDatas.getEvents();

    var Regions = GetArtDatas.getEvents();
    $scope.regions = Regions.query();
    $scope.regions.$promise.then(function (data) {
        $scope.regions = data;
        console.log(" j'ai recuepere data ", data);

        let transformedData = transformAgenda(data);
        let evtPast = transformedData.avant;
        let evtFuture = transformedData.apres;

        let agenda = evtPast;
        let agendaArray = new Array();
        let jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        let moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
        let leJour = 1; //jourDay[agenda[0].date.getDate()];
        let leMois = 1; //moisMonth[agenda[0].date.getMonth()];
        $scope.agendaAnterieur = evtPast;
        $scope.agendaPosterieur = evtFuture;
        console.log(" je viens de remplir mes variables ");
        console.log(" avec $scope.agendaAnterieur  ", $scope.agendaAnterieur);
        console.log(" et $scope.agendaPosterieur  ", $scope.agendaPosterieur);
        console.log(" et transformedData  ", transformedData);
    });


  }]);

  //var oPromiseArtEvents = $q.defer();

  // $q.when($scope.promesseDagenda).then(
  //   function (data) {
  //     console.log(" j'ai recuepere data ", data);

  //     let transformedData = transformAgenda($q, data);
  //     let evtPast = transformedData.avant;
  //     let evtFuture = transformedData.apres;

  //     let agenda = evtPast;
  //     let agendaArray = new Array();
  //     let jourDay = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  //     let moisMonth = ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN', 'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DÉCEMBRE'];
  //     let leJour = 1; //jourDay[agenda[0].date.getDate()];
  //     let leMois = 1; //moisMonth[agenda[0].date.getMonth()];
  //     $scope.agendaAnterieur = evtPast;
  //     $scope.agendaPosterieur = evtFuture;
  //     console.log(" je viens de remplir mes variables ");
  //     console.log(" avec $scope.agendaAnterieur  ", $scope.agendaAnterieur);
  //     console.log(" et $scope.agendaPosterieur  ", $scope.agendaPosterieur);
  //     console.log(" et transformedData  ", transformedData);
  //   }
  // );


  app.directive("artEvenement", function ($rootScope) {

    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        currentAgenda: '=askedAgenda',
        currentTitle: '=askedTitle'
      },
      templateUrl: 'app/layout/tmpl/agendaEvent.html'
    };
  });
})();