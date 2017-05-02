var app = angular.module('myModule', []);

app.controller('myController',function($scope){

  $scope.toDoList=[];
  $scope.addTask = function(newTask){
    $scope.toDoList.push({name:newTask.name});
        $scope.task = null;
  }

  $scope.deleteTask = function(i){
    $scope.toDoList.splice(i, 1);
  }
});
// removeTask: function(index){
//   toDo.data.tasks.splice(index, 1);
