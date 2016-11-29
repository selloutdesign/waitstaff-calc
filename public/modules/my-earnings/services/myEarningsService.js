angular.module('myEarningsService', [])
.factory('Earnings', function($http) {
	
	var listFactory = {};

	// Replicate $http request returning JSON
	listFactory.all = function() {

		return $http.get('./modules/my-earnings/services/list.json');

	};

	return listFactory;

});