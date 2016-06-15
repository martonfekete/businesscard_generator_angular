// Define module
	var ncGenerator = angular.module('ncGenerator', []);

	// Define tcontroller on module
	ncGenerator.controller('NCController', function NCController($scope) {
	  $scope.images = [
		{
		  filename: 'bg1',
		  extension: 'png'
		}, {
		  filename: 'bg2',
		  extension: 'png'
		}
	  ];
	});