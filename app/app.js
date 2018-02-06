import './css/style.scss';
import './css/menu.scss';
import './css/animate.scss';
import './module/accueil.module.js';
import './module/info.module.js';
import {maRoute} from './services/route.js';



const app = angular.module('main', ['ngRoute', 'accueil','infoModule']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider
		.hashPrefix('');
		maRoute($routeProvider);
}]);


app.service('remyCss', function RemyCss($document) {
	'ngInject';
	this.onload = function(url) {
		var bodyElt = angular.element($document[0].body);
		bodyElt.addClass('is-loading');
		angular.element('<img/>').attr('src', url).on('load', function() {
			angular.element(this).remove();
			bodyElt.removeClass('is-loading');
		});
	};
});

app.run(function(remyCss, $location,$window) {
	'ngInject';
	var img = '/app/img/menu.jpg';
	if ($location.path() === '' || $location.path() === '/' || $location.path() === '/hello') {
		remyCss.onload(img);
	} 
});

