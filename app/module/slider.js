import '../js/menu.js';


let widthMax = 1000;
const app = angular.module('slider', ['ngAnimate'])
  .controller('MainCtrl', function ($scope, $rootScope, $window, $timeout, $document, $location) {
    $rootScope.page='slider';
    $scope.showTopMenu = $location.path() === "/" ? true : false;
    $scope.theTimeout;
    $scope.defaultTimeToChange = 2000;
    $scope.defaultTimeToCheck = 500;
    $scope.currentTimeToChange = $scope.defaultTimeToChange;
    $scope.autosideTimeout = function () {
      $scope.enableAutoCanceled = false;
      //time
      if ($scope.time < $scope.currentTimeToChange) {
        $scope.time +=  $scope.defaultTimeToCheck;
      } else {
        $scope.nextSlide(true);
        $scope.time = 0;
        $scope.currentTimeToChange = $scope.defaultTimeToChange ;
      }
      $scope.theTimeout = $timeout($scope.autosideTimeout,  $scope.defaultTimeToCheck);
    };

    $scope.stopTimeout = function () {
      $timeout.cancel($scope.theTimeout);
      console.log("Timer Stopped");
    };

    $scope.enableAutoSlide = $scope.enableAutoSlide !== undefined ? true : $scope.enableAutoSlide;
    $scope.slides = [{
        image: 'app/img/slider1.jpg',
        description: 'Image 00',
        url: 'desc/00',
        id:'sImg00'
      },
      {
        image: 'app/img/slider2.jpg',
        description: 'Image 01',
        url: 'desc/01',
        id:'sImg01'
      },
      {
        image: 'app/img/slider3.jpg',
        description: 'Image 02',
        url: 'desc/02',
        id:'sImg02'
      },
      {
        image: 'app/img/slider4.jpg',
        description: 'Image 03',
        url: 'desc/03',
        id:'sImg03'
      },
      {
        image: 'app/img/slider5.jpg',
        description: 'Image 04',
        url: 'desc/04',
        id:'sImg04'
      },
      {
        image: 'app/img/slider6.jpg',
        description: 'Image 05',
        url: 'desc/05',
        id:'sImg05'
      },
      {
        image: 'app/img/slider7.jpg',
        description: 'Image 06',
        url: 'desc/06',
        id:'sImg06'
      }
    ];

    if ($rootScope.currentIndex === undefined) {
      $scope.currentIndex = 0;
    }

    $scope.setCurrentSlideIndex = function (index) {
      $scope.currentTimeToChange +=2000; 
      $scope.currentIndex = index;
    };
    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };
    $scope.prevSlide = function (isFromAutoSlide = false) {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
      $rootScope.currentIndex = $scope.currentIndex;
      if(!isFromAutoSlide) {
        $scope.currentTimeToChange +=2000; 
      }
    };
    $scope.nextSlide = function (isFromAutoSlide = false) {
    
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++ $scope.currentIndex : 0;
       $rootScope.currentIndex = $scope.currentIndex;
       if(!isFromAutoSlide) {
         $scope.currentTimeToChange +=2000; 
       }
    };
    $scope.goTo = function (url, $index) {
      if ($scope.slides[$index].url != undefined && $scope.slides[$index].url !== '') {
       $location.path($scope.slides[$index].url)
      }
    };
    $scope.enableAuto = function (value = true) {
      if ($scope.enableAutoSlide && $scope.enableAutoCanceled) {
        $scope.autosideTimeout();
      }
    };

    $scope.autosideTimeout();
    angular.element(document).ready(function () {
      var lesSlides = document.getElementsByClassName('slide');

      if (lesSlides.length > 0) {

        for (var i = 0; i < lesSlides.length; i++) {
          var leSlide = lesSlides[i];
          var originalWidth = leSlide.width;
          var originalHeight = leSlide.height;
          var targetHeight = originalHeight;
          var targetWidth = originalWidth;

          if (targetWidth > widthMax) {
            targetWidth = widthMax;
            var rapport = targetWidth / originalWidth;
            targetHeight = targetHeight * rapport;
            leSlide.height = targetHeight;
          } else if (targetWidth < widthMax) {
            leSlide.margin = 'auto';
          }
        }
      }
    });

  }).animation('.slide-animation', function () {
    return {
      addClass: function (element, className, done) {

        if (className == 'ng-hide') {
          var originalWidth = element[0].width;
          var originalHeight = element[0].height;
          var targetHeight = originalHeight;
          var targetWidth = originalWidth;
          if (targetWidth > widthMax) {
            targetWidth = widthMax;
          }
          var rapport = targetWidth / originalWidth;
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
          var originalWidth = element[0].width;
          var originalHeight = element[0].height;
          var targetHeight = originalHeight;
          var targetWidth = originalWidth;
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