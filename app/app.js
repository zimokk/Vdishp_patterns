'use strict';

var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/index', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .when('/report', {
        templateUrl: 'templates/report.html',
        controller: 'TemplateCtrl'
      })
      .otherwise({redirectTo: '/index'});
}]);
