'use strict';

var MyApp = angular.module('myApp.task', [])

.controller('TaskCtrl', ['$scope','Tasks',function($scope, Tasks) {
  $scope.Tasks = Tasks;
  $scope.setCurrentData = function(task){
    $scope.redactedTask = task;
  };
  $scope.createTask = function(){
    $scope.redactedTask = {};
  }
}]);