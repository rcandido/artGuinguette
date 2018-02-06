import {transformAgenda} from '../js/dataProcessing.js';
import '../services/animationServices.js';
import '../services/dataServices.js';
import '../js/angular-scroll-animate.js';
import '../js/myConst.js';

(function () {
  const app = angular.module('agendaEvenementModule', ['angular-scroll-animate', 'services', 'dataServices', 'ngSanitize']);
  app.controller("EvtController", ['$scope', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $q, AnimationInOut, GetArtDatas) {
   
    //manage animation
    $scope.animObject = AnimationInOut;
    AnimationInOut.start($scope);

    // Manage 
    $scope.limit = 10;
    $scope.evtTitleAfter = `A noter sur vos agendas`;
    $scope.evtTitleBefore = `C'est trop tard mais il est encore temps de jeter un oeil`;
    $scope.agendaAnterieur = [];
    $scope.agendaPosterieur = [];


    var Events = GetArtDatas.getEvents();
    var pEvents = Events.query();
    pEvents.$promise.then(function (data) {
        let transformedData = transformAgenda(data);
        $scope.agendaAnterieur = transformedData.before;
        $scope.agendaPosterieur = transformedData.after;
    });

    $scope.isShowAfter = (agendaType) => {
        return $scope[agendaType] !== undefined && $scope[agendaType].length > 0 ? true : false; 
    }


  }]);

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