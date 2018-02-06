import {transformAgenda} from '../js/dataProcessing';
import '../services/animationServices';
import '../services/dataServices';
import '../js/angular-scroll-animate';
import '../js/myConst';

(function () {
  const app = angular.module('agendaEvenementModule', ['angular-scroll-animate', 'services', 'dataServices', 'ngSanitize']);
  app.controller('EvtController', ['$scope', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $q, AnimationInOut, GetArtDatas) {
   
    // Manage animation
    AnimationInOut.start($scope);

    // Init events  
    $scope.limit = 10;
    $scope.evtTitleAfter = `A noter sur vos agendas`;
    $scope.evtTitleBefore = `C'est trop tard mais il est encore temps de jeter un oeil`;
    $scope.agendaAnterieur = [];
    $scope.agendaPosterieur = [];

    // Get events
    let Events = GetArtDatas.getEvents();
    let pEvents = Events.query();
    pEvents.$promise.then(function (data) {
        let transformedData = transformAgenda(data);
        $scope.agendaAnterieur = transformedData.before;
        $scope.agendaPosterieur = transformedData.after;
    });

    // Manage visibility section title
    $scope.isShowTitleSection= (agendaType) => {
        return $scope[agendaType] !== undefined && $scope[agendaType].length > 0 ? true : false; 
    }
  }]);

  app.directive('artEvenement', function ($rootScope) {

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