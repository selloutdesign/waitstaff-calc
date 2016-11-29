angular.module('calcCtrl', ['calcService', 'ngMessages'])
.controller('calcCtrl', function(Calc) {
	
	self = this;
	// self.subTotal = 10;
	self.tipTotal = 0;
	self.mealCount = 0;
	self.aveTip = 0;
	self.cancel = function() {
		console.log("cancel");
		self.basePrice = "";
		self.taxRate = "";
		self.tipPercent = "";
	};
	self.submit = function(form) {
		console.log("submitted");
		self.subTotal = (self.basePrice + (self.basePrice * ( self.taxRate / 100 ) ) ) ;
		self.tip = self.subTotal * ( self.tipPercent / 100 );
		self.total = self.subTotal + self.tip;

		self.tipTotal = self.tipTotal + self.tip;
		self.mealCount = self.mealCount  + 1;
		self.aveTip = self.aveTip + (self.tipTotal / self.mealCount);
	};

	self.reset = function() {
		self.tipTotal = 0;
		self.mealCount = 0;
		self.aveTip = 0;
		self.basePrice = "";
		self.taxRate = "";
		self.tipPercent = "";
		self.subTotal = "";
		self.tip = "";
		self.total = "";
	};
	// self.exampleItems = Calc.all();

});