angular.module('TodoApp',[]).controller('TodoController',['$scope', function ($scope) {
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
  }

  $scope.archive = function(){
    for (var i = 0; i < $scope.todo.length; i++) {
      if($scope.todo[i].done)
        $scope.todo.splice(i,1);
    }
  }


}])
