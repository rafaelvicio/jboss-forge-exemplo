'use strict';

angular.module('br.com.rafael.vicio',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Artigos',{templateUrl:'views/Artigo/search.html',controller:'SearchArtigoController'})
      .when('/Artigos/new',{templateUrl:'views/Artigo/detail.html',controller:'NewArtigoController'})
      .when('/Artigos/edit/:ArtigoId',{templateUrl:'views/Artigo/detail.html',controller:'EditArtigoController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
