export var maRoute = function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/layout/tmpl/acceuil.html'
        })
        .when('/coucou', {
            templateUrl: 'app/layout/tmpl/empty.html'
        })
        .when('/desc/:msg', {
            templateUrl: 'app/layout/tmpl/info.html',
            controller: 'InfoControler',
            controllerAs: '$ctrl'
        })
        .otherwise({
           // redirectTo: '/'
        });
}