var services = angular.module('services', []);

services.factory('AnimationInOut', function($window) {

  let animationInOut = {};

  let animationIn; 
  const animationDefault = 'fadeInDown';
 
  animationInOut.turnInOn = function() {
     animationIn = true;
    return animationIn;
  };

  animationInOut.turnInOff = function() {
    animationIn = false;
    return animationIn
  };
  animationInOut.getAnimationIn = function() {
    return animationIn;
  };
  animationInOut.getAnimationDefault = function() {
    return animationIn;
  };


  animationInOut.animateElementIn = function ($el, $scope) {
    let animationType = $el[0].dataset.effect != undefined? $el[0].dataset.effect : animationDefault ;
    let animationType2 =  $el[0].dataset.effect2 != undefined? $el[0].dataset.effect2 : animationType ;
    
    if (animationIn) {
      animationType = animationType2;
      animationInOut.turnInOff();
    } else animationInOut.turnInOn();

    if(($el.hasClass('not-to-mobile') && $window.outerWidth<600) == false) {
      $el.removeClass('hidden');
      $el.addClass('animated ' + animationType)
    }
   
  };

  animationInOut.animateElementOut = function ($el, $scope) {
    let animationType = $el[0].dataset.effect != undefined? $el[0].dataset.effect : animationDefault ;
    let animationType2 =  $el[0].dataset.effect2 != undefined? $el[0].dataset.effect : animationType ;

    if (animationIn) {
      animationType = animationType2;
      animationInOut.turnInOff();
    } 
    if(($el.hasClass('not-to-mobile') && $window.outerWidth<600) == false) {
      $el.addClass('hidden');
      $el.removeClass('animated ' + animationType); 

    } 
  }


  return animationInOut;
});