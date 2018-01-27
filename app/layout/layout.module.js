var $ = require("jquery");
import {
	defaultAgenda,
	rempliMoiCa
} from '../js/filedData';
import '../module/slider.js';
import '../module/agendaEvent.js';
import '../services/animationServices.js';
import '../js/angular-scroll-animate.js';

(function () {
	'use strict';

	const app = angular.module('layout', ['slider', 'agendaEvenementModule', 'angular-scroll-animate', 'services']);
	app.controller("AccueilController", ['$scope', 'AnimationInOut', function ($scope, AnimationInOut) {
		$scope.anim = true;
		$scope.animateElementIn = AnimationInOut.animateElementIn;
		$scope.animateElementOut = AnimationInOut.animateElementOut;

	}]);


	app.directive('artMenu', function ($rootScope, $location, $window, $anchorScroll) {
		$rootScope.scrollTo = function (theId) {
			$window.record.location = $location;
			$window.record.theId = theId;
			if (theId === '.art0' && $location.path() != "/") {
				$('html, body').animate({
					scrollTop: 0
				}, 500);
				$location.path("/");
			} else {
				if ($location.path().indexOf("desc/") > 0) {
					$window.location.href = $location.protocol() +
						"://" + $location.host() + ":9000/#/#" + theId.substr(1);

				} else {
					let offset = 70;
					let target = $(theId).offset() != undefined && $(theId).offset().top != undefined ?
						$(theId).offset().top - offset : 0;
					$('html, body').animate({
						scrollTop: target
					}, 500);
				}
			}
		};
		$rootScope.mobileClick = function () {
			// Mobile Navigation
			if ($('.main_h').hasClass('open-nav')) {
				$('.main_h').removeClass('open-nav');
			} else {
				$('.main_h').addClass('open-nav');
			}
		};
		return {
			templateUrl: 'app/layout/tmpl/menu.html'
		};
	});
	app.directive('artContenuAccueil', function () {

		return {
			templateUrl: 'app/layout/tmpl/contenuAccueil.html'
		};
	});
	app.directive('artFooter', function () {
		return {
			templateUrl: 'app/layout/tmpl/footer.html'
		};
	});

})();