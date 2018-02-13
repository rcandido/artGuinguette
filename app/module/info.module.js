import '../services/animationServices';
import '../js/angular-scroll-animate';
import '../services/dataServices';


(function () {

  const app = angular.module('infoModule', ['services', 'dataServices']);
  app.controller('InfoControler', ['$scope', '$routeParams', '$window', '$anchorScroll', '$q', 'AnimationInOut', 'GetArtDatas', 'updating', function ($scope, $routeParams, $window, $anchorScroll, $q, AnimationInOut, GetArtDatas, updating) {
    'ngInject';

    // Manage mobile
    let screenWidth = $window.innerWidth;
    $window.record = $scope;
    $scope.updating = updating;
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
 
    $scope.convert= (textBrut) => {
      var exp = String.fromCharCode(10);
      var nv = textBrut.replace(new RegExp(exp, 'g'), "<br/>");
      var textConverti = nv.replace(/\n|\r/g, "<br/>");
      return textConverti
    }
// Get datas for view
$scope.save = (evt) => {
  GetArtDatas.saveEvent(evt).then(function (result) {
   
    });
} 

var _getAllFilesFromFolder = function(dir) {

  var fs = require('file-system');
  var results = [];

  filesystem.readdirSync(dir).forEach(function(file) {

      file = dir+'/'+file;
      var stat = filesystem.statSync(file);

      if (stat && stat.isDirectory()) {
          results = results.concat(_getAllFilesFromFolder(file))
      } else results.push(file);

  });

  return results;

};

var grosTest = _getAllFilesFromFolder('../services/animationServices');
console.log("grosTest", grosTest)

    // Get datas for view
    let thisEvent = GetArtDatas.getEvent($scope.id).then(function (data) {
      $scope.evt = data;
      $scope.getHeroClass = function (page) {
        return 'hero-' + $scope.message;
      }
    });
  }]);
})();