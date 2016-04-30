'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.task',
  'myApp.report',
  'angular-timeline'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/task', {
        templateUrl: 'templates/task.html',
        controller: 'TaskCtrl'
      })
      .when('/report', {
        templateUrl: 'templates/report.html',
        controller: 'TemplateCtrl'
      })
      .otherwise({redirectTo: '/task'});
}]).
controller('AppCtrl', ['$scope', 'Reports', 'Tasks',function($scope, Reports, Tasks){
    $scope.Reports = Reports;
    $scope.Tasks = Tasks;
    $scope.events = [{
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        title: 'Second heading',
        content: 'More awesome content.'
    }, {
        title: 'Second heading',
        content: 'More awesome content.'
    }, {
        title: 'Second heading',
        content: 'More awesome content.'
    }];
}]);
