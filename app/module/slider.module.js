import '../js/menu';
import '../services/dataServices';

(function () {
  let widthMax = 1000;
  const app = angular.module('slider', ['ngAnimate', 'dataServices'])
    .controller('MainCtrl', function ($scope, $rootScope, $window, $timeout, $document, $location, $routeParams, GetArtDatas) {
      
      $scope.sousdossier = '0';
      $scope.showTopMenu = true;
      $scope.isClick = 'slide-clickable';
      if ($location.path() != '/') {
        $scope.isClick = '';
        $scope.showTopMenu = false;
        let msg2 = $routeParams.msg.split('-');
        $scope.sousdossier = msg2[1];
      }
      $scope.theTimeout;
      $scope.defaultTimeToChange = 2000;
      $scope.defaultTimeToCheck = 500;
      $scope.currentTimeToChange = $scope.defaultTimeToChange;

      $scope.autosideTimeout = function () {
        $scope.enableAutoCanceled = false;
        //time
        if ($scope.time < $scope.currentTimeToChange) {
          $scope.time += $scope.defaultTimeToCheck;
        } else {
          $scope.nextSlide(true);
          $scope.time = 0;
          $scope.currentTimeToChange = $scope.defaultTimeToChange;
        }
        $scope.theTimeout = $timeout($scope.autosideTimeout, $scope.defaultTimeToCheck);
      };

      $scope.stopTimeout = function () {
        $timeout.cancel($scope.theTimeout);
        console.log('Timer Stopped');
      };

      $scope.enableAutoSlide = $scope.enableAutoSlide !== undefined ? true : $scope.enableAutoSlide;

      $scope.slides = [];
      GetArtDatas.getSlide($scope.sousdossier, $rootScope).then(function(data) {
        $rootScope.slide[$scope.sousdossier] = data;
        $scope.slides = data;
      });

      if ($rootScope.currentIndex === undefined) {
        $scope.currentIndex = 0;
      }

      // Slide navigation
      $scope.setCurrentSlideIndex = function (index) {
        $scope.currentTimeToChange += 2000;
        $scope.currentIndex = index;
      };
      $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
      };

      // Show previous
      $scope.prevSlide = function (isFromAutoSlide = false) {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        $rootScope.currentIndex = $scope.currentIndex;
        if (!isFromAutoSlide) {
          $scope.currentTimeToChange += 2000;
        }
      };

      // Show next
      $scope.nextSlide = function (isFromAutoSlide = false) {
        if(!$scope.slides) {
            return false;
        }
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        $rootScope.currentIndex = $scope.currentIndex;
        if (!isFromAutoSlide) {
          $scope.currentTimeToChange += 2000;
        }
      };

      // Show selected slide
      $scope.goTo = function (url, $index) {
        if (!$scope.showTopMenu) {
          return false;
        } else if ($scope.slides[$index].url != undefined && $scope.slides[$index].url !== '') {
          $location.path($scope.slides[$index].url + '-' + $scope.slides[$index].id)
        }
      };

      // actice slider auto
      $scope.enableAuto = function (value = true) {
        if ($scope.enableAutoSlide && $scope.enableAutoCanceled) {
          $scope.autosideTimeout();
        }
      };

      $scope.autosideTimeout();
      angular.element(document).ready(function () {

        // Get photos size info
        let lesSlides = document.getElementsByClassName('slide');
        if (lesSlides.length > 0) {
          // Check photos
          for (let i = 0; i < lesSlides.length; i++) {
            let leSlide = lesSlides[i];
            let originalWidth = leSlide.width;
            let originalHeight = leSlide.height;
            let targetHeight = originalHeight;
            let targetWidth = originalWidth;
            // If photo is too big we need to resize
            if (targetWidth > widthMax) {
              targetWidth = widthMax;
              let rapport = targetWidth / originalWidth;
              targetHeight = targetHeight * rapport;
              leSlide.height = targetHeight;
            } else if (targetWidth < widthMax) {
              leSlide.margin = 'auto';
            } else if (targetWidth == 0) {
              leSlide.width = 'auto';
              leSlide.height = 'auto';
            }
          }
        }
      });

    }).animation('.slide-animation', function () {
      return {
        addClass: function (element, className, done) {

          if (className == 'ng-hide') {
            let originalWidth = element[0].width;
            let originalHeight = element[0].height;
            let targetHeight = originalHeight;
            let targetWidth = originalWidth;
            // If photo is too big we need to resize
            if (targetWidth > widthMax) {
              targetWidth = widthMax;
            }
            // Resize
            let rapport = targetWidth / originalWidth;
            targetHeight = targetHeight * rapport;
            TweenMax.to(element, 0.5, {
              left: -targetWidth,
              onComplete: done
            });
          } else {
            done();
          }
        },
        removeClass: function (element, className, done) {
          if (className == 'ng-hide') {
            let originalWidth = element[0].width;
            let originalHeight = element[0].height;
            let targetHeight = originalHeight;
            let targetWidth = originalWidth;
            element.removeClass('ng-hide');
            TweenMax.set(element, {
              left: targetWidth
            });
            TweenMax.to(element, 0.5, {
              left: 0,
              onComplete: done
            });
          } else {
            done();
          }
        }
      };
    });
  app.directive('slider', function ($window, $timeout) {
    return {
      templateUrl: 'app/layout/tmpl/slider.html'
    }
  });

})();