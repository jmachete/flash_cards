(function () {

    angular.module('flashCardApp', ['ngRoute','ui.bootstrap'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/', {
                        controller: 'CardController',
                        templateUrl: 'app/view/card.html'
                })
                .when('/categories', {
                        controller: 'CategoryController',
                        templateUrl: 'app/view/category.html'
                })
                .otherwise({redirectTo:'/'});
            }]);

}());

