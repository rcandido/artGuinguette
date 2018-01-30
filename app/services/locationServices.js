var services = angular.module('locationServices', []);

services.factory('LocationServices', function($window) {
  let currentEnvironment = {};
  currentEnvironment.getDomain = function() {   
    return  $window.location.host; //TODO change by env property file
  };
  currentEnvironment.getDomainWithHttp = function() {   
    return  $window.location.protocol + "//" + currentEnvironment.getDomain(); //TODO change by env property file
  };
  currentEnvironment.goTo = function(url) {   
    $window.location.href = url;	
  };

 
  return currentEnvironment;
});