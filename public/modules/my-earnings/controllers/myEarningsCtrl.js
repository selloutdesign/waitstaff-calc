angular.module('myEarningsCtrl', ['myEarningsService'])
.controller('myEarningsCtrl', function(Earnings) {
	
	vm = this;

	// Grab all the items from Earnings Service
	Earnings.all()
    .success(function(data) {
        console.log(data);
        vm.listItems = data;
    })
    .error(function(data) {
        // Error Handling
    });
    vm.tipTotal = 1;
    vm.reset = function() {
        vm.tipTotal = 0;
        vm.mealCount = 0;
        vm.aveTip = 0;
        vm.basePrice = "";
        vm.taxRate = "";
        vm.tipPercent = "";
        vm.subTotal = "";
        vm.tip = "";
        vm.total = "";
    };
});