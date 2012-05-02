__exports.viewLoaded = function() {
	var self = this;
	
	this.view.backButton.addEventListener('click', function() {
		Fe.popController();
	});
	
	this.view.nextButton.addEventListener('click', function(e) {
		Fe.pushController(Fe.controllers.SomePageAgain);
	});
};
