import '../services/animationServices';
import '../js/angular-scroll-animate';
import '../services/dataServices';

(function () {

  const app = angular.module('infoModule', ['services', 'dataServices']);
  app.controller('InfoControler', ['$scope', '$routeParams', '$window', '$anchorScroll', '$q', 'AnimationInOut', 'GetArtDatas', function ($scope, $routeParams, $window, $anchorScroll, $q, AnimationInOut, GetArtDatas) {
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
style.innerHTML = '.cssClass { color: #F00; }';
document.getElementsById('#heross')[0].appendChild(style);

document.getElementById('someElementId').className = 'cssClass';

    // Get datas for view
    let thisEvent = GetArtDatas.getEvent($scope.id).then(function(data){
       $scope.evt = data;
       $scope.getHeroClass = function (page) {
          return 'hero-' + $scope.message;
       }
    });
  }]);
})();