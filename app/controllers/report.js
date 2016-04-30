'use strict';

angular.module('myApp.report', ['ngRoute'])

.controller('TemplateCtrl', ['$scope', 'Reports', 'Tasks',function($scope, Reports, Tasks) {
    $scope.Reports = Reports;
    $scope.Tasks = Tasks;
    $scope.newReport = {};
    $scope.masProjects = [];
    $scope.fill = function(){
        debugger
        Tasks.all.forEach(function(task,taskIndex){
            var counter = 0;
            debugger;
            $scope.masProjects.forEach(function(project,index){
                if(project == task.project){
                    counter = 1;
                }
                debugger
            });
            if(counter == 0){
                $scope.masProjects.push(task.project);
                debugger
            }
        })
    };
    debugger
}]);