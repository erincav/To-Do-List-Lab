var app = angular.module('myModule', []);

app.controller('myController',function($scope){

  $scope.toDoList=[];
  $scope.addTask = function(newTask){
    $scope.toDoList.push({name:newTask.name});
  }

  $scope.deleteTask = function(deleteTask){
    $scope.toDoList.splice(this,1);
  }
});
