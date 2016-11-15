angular.module('listCtrl', ['listService'])
.controller('listCtrl', function(List) {
	
	vm = this;

	// Grab all the items from List Service
	List.all()
    .success(function(data) {
        vm.listItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});