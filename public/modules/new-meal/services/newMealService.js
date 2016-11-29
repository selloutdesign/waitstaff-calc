angular.module('newMealService', [])
.factory('Meals', function($http) {
	
	var cardsFactory = {};

	// Replicate $http request returning JSON
	cardsFactory.all = function() {

		return $http.get('./modules/new-meal/services/cards.json');

	};

	return cardsFactory;

});