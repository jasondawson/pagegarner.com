var app = angular.module('myWebsite', ['ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {

    $routeProvider

      .when('/home', {
        templateUrl: 'Views/home.html',
        controller: 'MainCtrl'
      })

    .when('/about', {
      templateUrl: 'Views/about.html',
      controller: 'MainCtrl'
    })

     .when('/lost', {
      templateUrl: 'Views/lost.html',
      controller: 'MainCtrl'
    })

    .when('/checkItOut', {
      templateUrl: 'Views/checkItOut.html',
      controller: 'MainCtrl'
    })

    .when('/lightRail', {
      templateUrl: 'Views/lightRail.html',
      controller: 'MainCtrl'
    })



      .otherwise({
        redirectTo: '/home'
      })

});
