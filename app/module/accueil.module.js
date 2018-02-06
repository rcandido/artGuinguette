var $ = require('jquery');

import '../module/slider.module';
import '../module/agendaEvent.module';
import '../services/animationServices';
import '../services/locationServices';
import '../js/angular-scroll-animate';

(function () {
	'use strict';

	const app = angular.module('accueil', ['slider', 'agendaEvenementModule', 'angular-scroll-animate', 'services', 'locationServices']);
	app.controller('AccueilController', ['$scope', 'AnimationInOut', function ($scope, AnimationInOut) {		
		AnimationInOut.start($scope);
	}]);

	app.directive('artMenu',  ['$rootScope', '$location', 'LocationServices', function ($rootScope, $location, LocationServices) {
		// Manage scrollTo function 
		$rootScope.scrollTo = function (theId) {	
			
			let domain = LocationServices.getDomainWithHttp();
			// Click on logo and it is not accueil
			if (theId === '.art0' && $location.path() != '/') {
				$('html, body').animate({
					scrollTop: 0
				}, 500);
				$location.path('/');
			} else {
				if ($location.path().indexOf('desc/') > 0) {
					let url = domain + '/#/#' + theId.substr(1);
					LocationServices.goTo(url);			
				} else { // accueil
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
	}]);

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