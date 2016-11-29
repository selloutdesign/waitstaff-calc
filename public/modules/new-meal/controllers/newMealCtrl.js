angular.module('newMealCtrl', ['newMealService'])
.controller('newMealCtrl', function(Meals) {
	
	self = this;
	
	// Grab all the items from Meals Service
	Meals.all()
    .success(function(data) {
        console.log(data);
        self.cardItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

    // self.subTotal = 10;
    self.tipTotal = 0;
    self.mealCount = 0;
    self.aveTip = 0;
    self.cancel = function() {
        console.log("cancel");
        self.basePrice = self.taxRate = self.tipPercent = self.subTotal = self.tip = self.total = 0;
    };
    self.submit = function(form) {
        console.log("submitted");
        self.subTotal = self.tip = self.total = 0;
        self.subTotal = (self.basePrice + (self.basePrice * ( self.taxRate / 100 ) ) ) ;
        self.tip = self.subTotal * ( self.tipPercent / 100 );
        self.total = self.subTotal + self.tip;

        self.tipTotal = self.tipTotal + self.tip;
        self.mealCount = self.mealCount  + 1;
        self.aveTip = self.aveTip + (self.tipTotal / self.mealCount);
    };
});