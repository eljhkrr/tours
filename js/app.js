var app = angular.module('myModule', ['ui.bootstrap']);

app.controller("TabMenuController", ["$scope", function($scope){
	
}]);

app.controller("CardsController", ["$scope", "$modal", function($scope, $modal){

	$scope.cardModal = function(size){

		var modalInstance = $modal.open({
			templateUrl: 'cardModals.html'
		});
	};
	
}]);

app.controller("NavController", ["$scope", "$modal", function($scope, $modal){

	$scope.isCollapsed = true;

	$scope.signinModal = function(size){

		var modalInstance = $modal.open({
			templateUrl: 'myModalContent.html'
		});
	};
	
}]);

