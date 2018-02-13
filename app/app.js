import './css/style.scss';
import './css/menu.scss';
import './css/animate.scss';
import './module/accueil.module';
import './module/info.module';
import './module/manageInfo.module';
import './services/dataServices';
import {photoSlideNumber} from './js/myConst';

import {maRoute} from './services/route';


const app = angular.module('main', ['ngRoute', 'accueil','infoModule','manageInfoModule', 'dataServices']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider
		.hashPrefix('');
		maRoute($routeProvider);
}]);


app.service('remyCss', function RemyCss($document) {
	'ngInject';
	this.onload = function(url) {
		let bodyElt = angular.element($document[0].body);
		bodyElt.addClass('is-loading');
		angular.element('<img/>').attr('src', url).on('load', function() {
			angular.element(this).remove();
			bodyElt.removeClass('is-loading');
		});
	};
});

app.run(function(remyCss, $location, $window, $rootScope, GetArtDatas) {
	'ngInject';
	let img = '/app/img/menu.jpg';
	if ($location.path() === '' || $location.path() === '/' || $location.path() === '/hello') {
		remyCss.onload(img);
	} 
});

