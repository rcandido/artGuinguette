import '../services/animationServices';
import '../js/angular-scroll-animate';
import '../services/dataServices';

(function () {

  const app = angular.module('manageInfoModule', ['services', 'dataServices']);
  app.controller('ManageInfoControler', ['$scope', '$routeParams', '$window', '$anchorScroll', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $routeParams, $window, $anchorScroll, $q, AnimationInOut, GetArtDatas) {
    'ngInject';

    // Manage mobile
    let screenWidth = $window.innerWidth;
    $window.record = $scope;
    $scope.isDesktop = function () {
      return $window.outerWidth > 700;
    }
    $anchorScroll();

    // Manage animation
    $scope.notMobileAnimation = true;
    AnimationInOut.start($scope);

    // Get param from url
    let messageComplet = $routeParams.msg.split('-');
    this.message = messageComplet[0];
    $scope.message = messageComplet[0];
    $scope.id = messageComplet[1];

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.heroInfo {  background: url(/app/img/' + $scope.id + '/slider' + $scope.message + '.jpg) no-repeat center center fixed;' +
      ' top: 350px; position: relative;  max-width: 1200px;  max-height: 1000px; margin:auto;' +
      '}';
    document.getElementById('heross').appendChild(style);
    document.getElementById('heross').className = 'heroInfo';

    // Get datas for view
    let thisEvent = GetArtDatas.getEvent($scope.id).then(function (data) {
      $scope.evt = data;
      $scope.getHeroClass = function (page) {
        return 'hero-' + $scope.message;
      }
    });
  }]);
})();