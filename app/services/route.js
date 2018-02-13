export var maRoute = function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/accueil.html'
        })
        .when('/desc/:msg', {
            templateUrl: 'app/views/info.html',
            controller: 'InfoControler',
            controllerAs: '$ctrl',
            resolve: {
                updating: function(){
                    return false;
                }
            }
        }).when('/udesc/:msg', {
            templateUrl: 'app/views/info.html',
            controller: 'InfoControler',
            controllerAs: '$ctrl',
            resolve: {
                updating:function(){
                    return true;
                }
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}