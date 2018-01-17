(function () {
	'use strict';

	const app = angular.module('layout', []);
	app.directive('artHeader', function(){
		return {
			templateUrl: 'layout/tmpl/header.html' 
		};
	});
	app.directive('artFooter', function(){
		return {
			templateUrl: 'layout/tmpl/footer.html' 
		};
	});


})();
