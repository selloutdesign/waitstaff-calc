angular.module('tabsCtrl', ['tabsService'])
.controller('tabsCtrl', function(Tabs) {
	
	vm = this;

	// Grab all the items from Tabs Service
	Tabs.all()
    .success(function(data) {
        vm.tabItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});