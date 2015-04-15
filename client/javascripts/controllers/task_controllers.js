var taskAppModule = angular.module('taskApp', []); 

taskAppModule.controller('tasksController', function($scope){
	$scope.tasks = [];

	$scope.createTask = function() {

		//to add a created at date 
		$scope.newTask.created = new Date();
		
		$scope.tasks.push($scope.newTask);

	}
	$scope.removeTask = function(task) {
		$scope.tasks.splice($scope.tasks.indexOf(task), 1);
	}

});