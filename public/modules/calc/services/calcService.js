angular.module('calcService', [])
.factory('Calc', function($http) {
    
    var calcFactory = {};

    calcFactory.all = function() {
        //return $http.get(API.URL/example);
        return $http.get('./modules/cards/services/cards.json');
    };

    return calcFactory;

});