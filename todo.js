angular.module('TodoApp',['ngMaterial']).controller('TodoController',['$scope', function ($scope) {
  $scope.todo=[
    { 'description':'do Something 1', 'done': false },
    { 'description':'do Something 2', 'done': false },
    { 'description':'do Something 3', 'done': false },
    { 'description':'do Something 4', 'done': false },
    { 'description':'do Something 5', 'done': false },
    { 'description':'do Something 6', 'done': false }
  ];

  $scope.addTodo = function(){
    $scope.todo.push({ 'description':$scope.todoText, 'done': false });
    $scope.todoText='';
    $scope.todoForm.$setUntouched();
  }

  $scope.archive = function(){
    var oldTodos = $scope.todo;
    $scope.todo = [];
    angular.forEach(oldTodos, function(task) {
      if (!task.done) $scope.todo.push(task);
    });
    $scope.todoForm.$setUntouched();
  }
}]);
