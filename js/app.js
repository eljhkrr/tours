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
			templateUrl: 'myModalContent.html',
			size: size
		});
		console.log("called");
		console.log($scope.showNavbar);
		$scope.showNavbar = false;
	};

	$scope.removeModal = function(){
		modalInstance.close();
		alert('gone');
	};
	

	//$scope.showNavbar = true;
}]);

app.directive("scroll", function($window){
	return function(scope, element, attrs){
		scope.visible = true;
		angular.element($window).bind("scroll", function(){
			console.log(this.pageYOffset);
			if (this.pageYOffset > 200) {
				element.removeClass('ng-hide');
				element.addClass('ng-show');
				//element.removeClass('navbar-invisible');
				//element.set("ng-show", "false");
				//console.log('gr8r!');
				//scope.showNavbar = false;
			} else if (this.pageYOffset < 200) {
				//element.addClass('navbar-hide');
				element.removeClass('ng-show');
				element.addClass('ng-hide');

			}
			//if (this.pageYOffset >= 100) alert('nice!');
		});
		
		//$scope.apply();
	};
});
